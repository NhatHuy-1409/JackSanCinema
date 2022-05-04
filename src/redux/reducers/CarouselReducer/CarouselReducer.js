import { GET_BANNER_LIST } from "../../types/MovieTypes"

const stateDefault = {
    arrBanner: []
}

export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
          case GET_BANNER_LIST:
              state.arrBanner=action.bannerList
            return { ...state }

        default:
            return state
    }
}
