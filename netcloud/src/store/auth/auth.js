import axios from 'axios'
import { format } from 'prettier'
const urlBASE = 'http://localhost:5000/api/users'
export default {
    state: {
        authorize: {
            err: null,
            notfound: null,
            success: null
        }

    },
    getters: {
        getStatusAuthorize(state) {
            return state.authorize
        }
    },
    mutations: {
        updateStatusAuthorizeSuccess(state) {
            state.authorize.success = true
        },
        updateStatusAuthorizeError(state) {
            state.authorize.err = true
            
        },
        
    },
    actions: {
        async authorization(ctx, form) {
            try {
                const data = await axios({
                    method: 'post',
                    url: `${urlBASE}/signin`,
                    data: {
                        login: form.login,
                        password: form.password
                    }
                })
                ctx.commit('updateStatusAuthorizeSuccess')
            } catch (error) {
                if (error.response.status === 404) {
                    ctx.commit('updateStatusAuthorizeError')

                }
                console.log(error.response)
            }
        }
    },

}