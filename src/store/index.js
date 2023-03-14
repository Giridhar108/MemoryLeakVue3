import {reactive, ref} from "vue";

export const person = reactive({
    title: '',
    information: {},
    isShowInformation: false
})

export const isShowPopUp = ref(false)