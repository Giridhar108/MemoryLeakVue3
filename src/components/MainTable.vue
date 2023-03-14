<template>
<!--    <div v-if="loadingTable"></div>-->
    <el-button type="primary" @click="handleShowPopUp">Open pop-up</el-button>
    <pop-up :model-value="isShowPopUp"
            @cancel="handleShowPopUp">
        <template v-slot:title>Warning</template>
        <template v-slot:content>
            Are you sure you want to delete this?
            This action cannot been undone.
        </template>
    </pop-up>
    <person-information v-if="person.isShowInformation" :personData="person.information" @closePanel="closePanel"/>

    <el-table v-if="!loadingTable" :border="true"
              :cell-class-name="$markTable"
              :data="listOfPerson"
              :header-cell-class-name="$markTableHeader"
              :highlight-current-row="true"
              :stripe="true"
              class="visitors-table__body table-custom w-100"
              data-test-id="listOfPerson"
              @row-click="clickRow"
    >
        <template v-for="item in columnsName" :key="item.orderIndex">
            <el-table-column
                :min-width="100"
                :label="item.label"
            >
                <template #default="scope" >
                    <div v-if="item.value !== 'company'">
                        {{ (scope.row[item.value]) }}
                    </div>
                    <div v-else>
                        name: {{ (scope.row[item.value].name) }}
                    </div>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import Api from '../api/index'
import PopUp from "@/components/popUp.vue";
// import {isShowPopUp, person} from "@/store";
import PersonInformation from "@/components/personInformation.vue";
import {columnsName} from "@/common/constants";

const person = reactive({
    title: '',
    information: {},
    isShowInformation: false
})

const isShowPopUp = ref(false)

const listOfPerson = ref([])
const loadingTable = ref(true)

const clickRow = (val) => {
    person.information = val
    person.isShowInformation = true
}

const closePanel = () => {
    person.isShowInformation = false
}

const handleShowPopUp = () => {
    isShowPopUp.value = !isShowPopUp.value
}

onMounted(() => {
    Api.history.getUsers().then((res) => {
        listOfPerson.value = [...res, ...res, ...res]
    }).finally(() => {
        loadingTable.value = false
    })
})
</script>


