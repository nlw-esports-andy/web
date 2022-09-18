import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Check, GameController } from 'phosphor-react'

import { Input } from './Form/Input'
import { FormEvent, useEffect, useState } from 'react'

interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)
  
  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    if (!data.name) {
      return
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        "name": data.name,
        "yearsPlaying": Number(data.yearsPlaying),
        "discord": data.discord,
        "weekDays": weekDays.map(Number),
        "hourStart": data.hourStart,
        "hourEnd": data.hourEnd,
        "useVoiceChannel": useVoiceChannel
      })

      alert('Ads created!')
    } catch (error) {
      console.log(error)
      alert('Ads creation error!')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="bg-[#2A2634] fixed top-1/2 left-1/2 py-8 px-10 text-white -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
          <Dialog.Title className="text-2xl font-black">Publish an ad</Dialog.Title>
          
          <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">Which game?</label>
              <select
                id="game" 
                name="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                defaultValue=""
              >
                <option disabled value="">Select the game you want to play</option>
                {games.map(game => (
                  <option key={game.id} value={game.id}>{game.title}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your name (or nickname)</label>
              <Input id="name" name="name" type="text" placeholder="How are you called?" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Years playing?</label>
                <Input id="yearsPlaying" name="yearsPlaying" type="number" placeholder="Ok if it's zero" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">What's your Discord?</label>
                <Input id="discord" name="discord" type="text" placeholder="user#0000" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">When do you play?</label>
                <ToggleGroup.Root 
                  type="multiple" 
                  className="grid grid-cols-4 gap-2"
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item 
                    value="0"
                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Sunday"
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    value="1"
                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Monday"
                  >
                    M
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    value="2"
                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Tuesday"
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    value="3"
                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Wednesday"
                  >
                    W
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    value="4"
                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Thursday"
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    value="5"
                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Friday"
                  >
                    F
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    value="6"
                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} 
                    title="Sunday"
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">At what time?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" name="hourStart" type="time" placeholder="From" />
                  <Input id="hourEnd" name="hourEnd" type="time" placeholder="Until" />
                </div>
              </div>
            </div>

            <label className="mt-2 flex gap-2 text-sm items-center">
              <Checkbox.Root 
                checked={useVoiceChannel}
                className="w-6 h-6 p-1 rounded bg-zinc-900"
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    setUseVoiceChannel(true)
                  } else {
                    setUseVoiceChannel(false)
                  }
                }}
              >
                <Checkbox.CheckboxIndicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.CheckboxIndicator>
              </Checkbox.Root>
              I usually connect with voice chat
            </label>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close 
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
              >
                Cancel
              </Dialog.Close>
              <button 
                type="submit"
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-2 hover:bg-violet-600"
              >
                <GameController size={24} />                    
                Find my duo
              </button>
            </footer>
          </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}