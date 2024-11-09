export interface Breed {
  weight: Weight
  height: Height
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  reference_image_id: string
  image: ImageB
}

export interface Weight {
  imperial: string
  metric: string
}

export interface Height {
  imperial: string
  metric: string
}

export interface ImageB {
  id: string
  width: number
  height: number
  url: string
  breeds: Breed[]
}
export interface Category {

  id:number
  name: string
}
export interface Favourite {
  id: number
  user_id: number
  image:ImageB
  image_id: string
  sub_id: any
  created_at: string
}
export interface ImageUpload {
  id:                number;
  url:               string;
  width:             number;
  height:            number;
  original_filename: string;
  pending:           number;
  approved:          number;
}