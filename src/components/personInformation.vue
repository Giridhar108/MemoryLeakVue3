<template>
    <div class="visitors-profile-current">
        <div>
            <div class="flex-grow-1 color-white m-r-5 fz-14">Profile Preview</div>
            <div class="close-btn c-pointer m-l-auto"
                 data-test-id="emitClosePanel"
                 @click="emit('closePanel')">
                close
            </div>
        </div>

        <div class="visitors-profile-current__body d-flex flex-column justify-content-between">
            <div class="visitors-profile-current__body-top">
                <div class="fz-18 fw5 m-b-5">
                    {{ personData.name }}
                </div>
                <div class="m-b-5">Group</div>
                <el-input v-model="personData.username"
                          class="group__header no-disable-style bg m-b-15 b-rad-6"
                          data-test-id="personData.groupName"
                          disabled
                          placeholder="Group Not Assigned"
                >
                    <template #prefix>
                        <div class="d-flex align-items-center">
                            <i class="vsd-icon-i-persons-group fz-14"></i>
                        </div>
                    </template>
                </el-input>
                <div v-if="personData.groupComment" class="m-b-15">
                    <div class="m-b-5">email</div>
                    <el-input v-model="personData.email"
                              class="visitors-profile-current__textarea w-100"
                              data-test-id="personData.groupComment"
                              readonly
                              type="textarea"
                    />
                </div>
            </div>
            <div>
                <div class="m-b-5">phone</div>
                <el-input v-model="personData.phone"
                          class="no-disable-style m-b-15"
                          data-test-id="personData.documentType"
                          disabled
                />

                <div class="m-b-5">website</div>
                <el-input v-model="personData.website"
                          class="no-disable-style m-b-15"
                          data-test-id="formatDate"
                          disabled
                />
            </div>
            <hr/>
            <div>Company</div>
            <div class="m-b-5">BS</div>
            <el-input v-model="personData.company.bs"
                      class="no-disable-style m-b-15"
                      data-test-id="personData.documentType"
                      disabled
            />
            <div class="m-b-5">Phrase</div>
            <el-input v-model="personData.company.catchPhrase"
                      class="group__header no-disable-style bg m-b-15"
                      data-test-id="personData.groupName"
                      disabled
                      placeholder="Group Not Assigned"
            >
                <template #prefix>
                    <div class="d-flex align-items-center">
                        <i class="vsd-icon-i-persons-group fz-14"></i>
                    </div>
                </template>
            </el-input>
            <div class="m-b-5">Name</div>
            <el-input v-model="personData.company.name"
                      class="no-disable-style m-b-15"
                      data-test-id="personData.documentType"
                      disabled
            />
        </div>
    </div>
</template>

<script setup>

import {toRefs} from "vue";

const props = defineProps(['personData'])
const emit = defineEmits(['closePanel'])
const {personData} = toRefs(props)

</script>