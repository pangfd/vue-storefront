import { GetterTree } from 'vuex'
import RootState from '../../types/RootState'
import WishlistState from './types/WishlistState'

const getters: GetterTree<WishlistState, RootState> = {
  isActive (state) {
    return state.items.length > 0
  }
}

export default getters
