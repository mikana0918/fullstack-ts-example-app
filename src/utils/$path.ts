import type { OptionalQuery as OptionalQuery0 } from '../pages/article'
import type { Query as Query1 } from '../pages/article/entry'

export const pagesPath = {
  "article": {
    "entry": {
      $url: (url: { query: Query1, hash?: string }) => ({ pathname: '/article/entry' as const, query: url.query, hash: url.hash })
    },
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/article' as const, query: url?.query, hash: url?.hash })
  },
  "death": {
    $url: (url?: { hash?: string }) => ({ pathname: '/death' as const, hash: url?.hash })
  },
  "family": {
    $url: (url?: { hash?: string }) => ({ pathname: '/family' as const, hash: url?.hash })
  },
  "house": {
    "move_in": {
      "result": {
        $url: (url?: { hash?: string }) => ({ pathname: '/house/move-in/result' as const, hash: url?.hash })
      },
      $url: (url?: { hash?: string }) => ({ pathname: '/house/move-in' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/house' as const, hash: url?.hash })
  },
  "settings": {
    $url: (url?: { hash?: string }) => ({ pathname: '/settings' as const, hash: url?.hash })
  },
  "tasks": {
    $url: (url?: { hash?: string }) => ({ pathname: '/tasks' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  category_death_jpeg: '/fullstack-ts-example-app/category-death.jpeg',
  category_marry_jpeg: '/fullstack-ts-example-app/category-marry.jpeg',
  category_move_jpeg: '/fullstack-ts-example-app/category-move.jpeg',
  category_sub_move_in_jpeg: '/fullstack-ts-example-app/category-sub-move-in.jpeg',
  category_sub_move_out_jpeg: '/fullstack-ts-example-app/category-sub-move-out.jpeg',
  category_sub_reloction_jpeg: '/fullstack-ts-example-app/category-sub-reloction.jpeg',
  favicon_png: '/fullstack-ts-example-app/favicon.png',
  stub_google_map_embed_png: '/fullstack-ts-example-app/stub-google-map-embed.png',
  vercel_svg: '/fullstack-ts-example-app/vercel.svg'
} as const

export type StaticPath = typeof staticPath
