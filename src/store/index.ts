import { createStore } from 'vuex'

export type Url = string
export type Path = string

export type ProjectAttribute = string

export interface ProjectItem {
  id: number
  title: string
  summery: string
  description: string
  image: Url,
  attributes: ProjectAttribute[]
  illustrations?: Path[]
  github?: Url
  website?: Url
}

export interface Design {
  id: number
  title: string
  src: string
  thumbnail: string
}

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        title: "🇯🇵 Display",
        summery: "Video player for learning Japanese.",
        description: "Display is a video player for learning Japanese. It allows you to watch videos and add subtitles to them. You can then click on words in the subtitles to look them up in a dictionary.",
        image: "display.png",
        attributes: ["TypeScript", "Tailwindcss", "Vue", "Electron"],
        illustrations: ["display/dashboard.png", "display/landingspage.png", "display/videowatch.png"],
        github: "https://github.com/Huntski/Display"
      },
      {
        id: 2,
        title: "Record Tracker",
        summery: "A tool for keeping track of your records.",
        description: `
        Record Tracker is an application made to help you organise and keep track of your currently owned records!

        This project is currently in testing but we are planning to integrate this application into a physical touchscreen to help record stores and owners of a lot of records keep track of their collection.
        `,
        image: "record-tracker.png",
        attributes: ["TypeScript", "Tailwindcss", "Vue", "Electron"],
        illustrations: ['recordtracker/dashboard.png', 'recordtracker/record-view.png', 'recordtracker/search-window.png'],
      },
      {
        id: 3,
        title: "PokémonBattle",
        summery: "Recreated Pokémon battle using data from the PokéAPI!",
        description: `
        A simple attempt on trying to recreate a Pokémon battle using only JavaScript.

        This project was originally an assignment from school to familiarize yourself with JavaScript. But sinds I already had a bunch of experience on hand, I tried recreating as many features of the actual game while also creating my own state management in plain JavaScript like the ones you can find in React and Vue.js.`,
        image: "pokemon.png",
        attributes: ["JavaScript"],
        illustrations: ["pokemon/challenger-arrived.png", "pokemon/change-pokemon.png", "pokemon/choose.png", "pokemon/start.png"],
        github: "https://github.com/Huntski/PokemonGame",
        website: "https://huntski.github.io/PokemonGame"
      }
    ] as ProjectItem[],

    designs: [
      {
        id: 1,
        title: 'The Pinché Introduction',
        src: '/documents/artis-pinché-introductie.pdf',
        thumbnail: 'designs/pinch-ape-introduction-thumbnail.png'
      },
      {
        id: 2,
        title: "Wieb's Ramen Restaurant",
        src: '/documents/vormgeving-ramen-restaurant.pdf',
        thumbnail: 'designs/ramen-restaurant-thumbnail.png'
      },
      {
        id: 3,
        title: "Coffee Experience Poster",
        src: '/documents/maas-koffieautomaat-poster.pdf',
        thumbnail: 'designs/koffie-userexperience-thumbnail.png'
      }
    ] as Design[]
  },

  getters: {
    getProjects(state): ProjectItem[] {
      return state.projects
    },

    getDesigns(state): Design[] {
      return state.designs
    }
  },
})
