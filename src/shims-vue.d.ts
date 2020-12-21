declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "genreList.json" {
  export const name: string;
  export const img: string;
  export const id: number;
}
