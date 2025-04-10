export interface YugiCard {
    id: number
    name: string
    desc: string
    atk: number
    def: number
    level: number
    card_images: CardImage[]
  }
  
  export interface CardImage {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
  }
  