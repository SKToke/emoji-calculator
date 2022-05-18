window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

Vue.component('calculator', {
    template: `
    <div class="container">
        <div class="row justify-content-center mt-5">
            <form v-on:submit.prevent="onSubmit">
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="operand_one">Operand One</label>
                        <input type="text" class="form-control" id="operand_one" v-model.number="formData.operand_one" :class="errors.hasOwnProperty('operand_one') ? 'is-invalid' : ''">
                        <div v-if="errors.hasOwnProperty('operand_one')" class="invalid-feedback"> {{ errors.operand_one[0] }} </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="operator">Operator</label>
                        <select class="form-control" v-model="formData.operator" :class="errors.hasOwnProperty('operator') ? 'is-invalid' : ''">
                            <option value="" selected>Select</option>
                            <option value="+">&#128125;</option>
                            <option value="-">&#128128;</option>
                            <option value="*">&#128123;</option>
                            <option value="/">&#128561;</option>
                        </select>
                        <div v-if="errors.hasOwnProperty('operator')" class="invalid-feedback"> {{ errors.operator[0] }} </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="operand_two">Operand Two</label>
                        <input type="text" class="form-control" id="operand_two" v-model.number="formData.operand_two" :class="errors.hasOwnProperty('operand_two') ? 'is-invalid' : ''">
                        <div v-if="errors.hasOwnProperty('operand_two')" class="invalid-feedback"> {{ errors.operand_two[0] }} </div>
                    </div>
                    <button type="submit" class="btn btn-primary mx-2 c-button">Submit</button>
                    <button type="button" @click="onReset" class="btn btn-danger c-button">Reset</button>
                </div>
            </form>
        </div>
        <div class="row justify-content-center mt-5" v-if="is_result">
            <div class="card">
                <div class="card-body">
                    Result: {{ result }}
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            is_result: false,
            result: 0,
            formData: {
                operand_one: '',
                operand_two: '',
                operator: '',
            },
            errors: {},
            routes: window.calculatorRoutes
        }
    },
    methods: {
        onReset() {
            this.result = 0;
            this.is_result = false;
            this.errors = {};
            this.formData.operand_one = '';
            this.formData.operator = '';
            this.formData.operand_two = '';
        },
        onSubmit() {
            this.result = 0;
            this.is_result = false;
            this.errors = {};
            axios.post(this.routes.calculator, this.formData).then(res => {
                if (res.data.success) {
                    this.result = res.data.data;
                    this.is_result = true;
                }
            }).catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                    this.errors = err.response.data.errors;
                }
            });
        }
    },
})
let app = new Vue({
    el: '#app'
})
