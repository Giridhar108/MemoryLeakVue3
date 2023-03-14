<template>
    <vue-final-modal data-test-id="state.messageLoading" classes="modal-container"
                     content-class="modal-content message-box"
                     v-model="isShowPopUp"
                     :minHeight="237"
                     :minWidth="320"
                     :click-to-close="true">
        <slot name="header"></slot>
        <div class="message-box__top">
            <div class="message-box__title">
                <slot name="title"></slot>
            </div>
            <div class="message-box__text">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="message-box__bottom" :style="{centeringButton: isOneButton}">
            <el-button-group class="d-flex align-items-center justify-content-between" v-if="!isOneButton">
                <el-button data-test-id="restoreDefault" :class="colorConfirmButton" :type="typeConfirmButton" @click="confirm">
                    {{contentConfirmButton}}
                </el-button>
                <el-button data-test-id="closeAttention" @click="cancel">{{contentCancelButton}}</el-button>
            </el-button-group>
            <el-button data-test-id="cancel" v-else @click="cancel" type="primary">Ok</el-button>
        </div>
    </vue-final-modal>
</template>
<script setup>

import {
    reactive, defineProps, defineEmits, computed
} from 'vue'
import {VueFinalModal} from "vue-final-modal";

const centeringButton = reactive({
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
})

const props = defineProps({
    contentConfirmButton: {
        type: String,
        default: 'Yes'
    },
    typeConfirmButton: {
        type: String,
        default: 'primary'
    },
    colorConfirmButton: {
        type: String
    },
    contentCancelButton: {
        type: String,
        default: 'Cancel'
    },
    isOneButton: {
        type: Boolean,
        required: false
    },
    modelValue: {
        type: Boolean,
        required: true
    }
})

const emits = defineEmits(['confirm', 'cancel', 'update:modelValue'])

const confirm = () => {
    emits('confirm', false)
}

const cancel = () => {
    emits('cancel', false)
}

const isShowPopUp = computed({
    get: () => props.modelValue,
    set: (newValue) => {
        emits('update:modelValue', newValue)
    }
})

</script>
