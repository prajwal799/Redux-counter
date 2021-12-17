import { TODO_ADD } from "./actionType3"

const todoadd = (payload) => {
    return{
        type: TODO_ADD,
        payload
    }
}
export default todoadd;