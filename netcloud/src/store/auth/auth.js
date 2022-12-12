import axios from 'axios'
import { format } from 'prettier'
const urlBASE = 'http://localhost:5000/api/users'
export default {
    state: {
        authorize: {
            err: null,
            notfound: null,
            errorNetwork:null,
            success: null
        },
        signup:{
            status:null
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
        clearStatusAuthorizeError(state){
            state.authorize.err = false
        },
        errorNetwork(state){
            state.authorize.errorNetwork = true
        },
        updateStatusSignUp(state){
            state.signup.status = 200
        }
        
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
                console.log(data)
                ctx.commit('updateStatusAuthorizeSuccess')
            } catch (error) {
                if(error.message == 'Network Error'){
                    return ctx.commit('errorNetwork')
                }
                if (error.response.status === 404) {
                  return  ctx.commit('updateStatusAuthorizeError')

                }
                console.log(error.message)
            }
        },
        async signup(ctx, form){
            try {
                const data = await axios({
                    method: 'post',
                    url: `${urlBASE}/signup`,
                    data: {
                        phone: form.phone,
                        password: form.password,
                        email:form.email
                    }
                })
                console.log(data)
                ctx.commit('updateStatusSignUp')
            } catch (error) {
                if(error.message == 'Network Error'){
                    return ctx.commit('errorNetwork')
                }
                console.log(error.message)
            }
        }
    },

}