<template>
    <div class="case__card_container">
        <div v-for="item in displayedData" :key="item.id">
            <CaseCardComponent :item="item" />
        </div>
        <a-pagination
            class="case__card_pagination"
            :current="currentPage"
            :total="data.length"
            :pageSize="pageSize"
            size="small"
            @change="handlePageChange"
        />
    </div>
</template>

<script>
import axios from "axios";
import CaseCardComponent from "@/components/common/CaseCardComponent/CaseCardComponent.vue";

export default {
    components: {
        CaseCardComponent
    },
    data() {
        return {
            data: [],
            currentPage: 1,
            pageSize: 5
        };
    },
    computed: {
        displayedData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.data.slice(startIndex, endIndex);
        }
    },
    name: "CaseComponent",
    mounted() {
        this.fetchCase();
    },
    methods: {
        async fetchCase() {
            try {
                const response = await axios.get("http://localhost:3000/case");
                this.data = response.data;
            } catch (error) {
                console.error("Ошибка:", error);
            }
        },
        handlePageChange(currentPage) {
            this.currentPage = currentPage;
        }
    }
};
</script>

<style scoped>
.case__card_container {
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}
.case__card_pagination{
    border-top: 1px solid black;
    padding: 14px 0;
}
.ant-pagination-item-active {
    background: blue;
}
.case__card_items {
    width: 100%;
    height: 100%;
}

</style>