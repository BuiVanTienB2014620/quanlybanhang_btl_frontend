<template>
    <div>
        <span class="table-add float-right mb-3 mr-2"><router-link :to="{ name: 'addposition' }" class="text-success"><i
                    class="fas fa-plus fa-2x" aria-hidden="true"></i></router-link></span>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Tên sản phẩn</th>
                    <th>Mô tả</th>
                    <th>Gía</th>
                    <th>Số lượng</th>
                    <th>Ghi chú</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="d-flex align-items-center ">
                            <img src="https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg"
                                alt="" style="width: 45px; height: 45px;margin-right:18px" class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Combo ngũ cốc</p>



                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Xuất xứ từ thiên nhiên</p>

                    </td>
                    <td>
                        <p>200.000 VNĐ</p>
                    </td>
                    <td>100</td>
                    <td>
                        <p>Có cho thêm hạt óc chó</p>
                    </td>
                    <td>
                        <router-link :to="{ name: 'editposition' }">
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                    <path d="M16 5l3 3"></path>
                                </svg>
                            </button>



                        </router-link>

                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex align-items-center ">
                            <img src="https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg"
                                alt="" style="width: 45px; height: 45px;margin-right:18px" class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Combo ngũ cốc</p>



                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Xuất xứ từ thiên nhiên</p>

                    </td>
                    <td>
                        <p>200.000 VNĐ</p>
                    </td>
                    <td>100</td>
                    <td>
                        <p>Có cho thêm hạt óc chó</p>
                    </td>
                    <td>
                        <router-link :to="{ name: 'editposition' }">
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                    <path d="M16 5l3 3"></path>
                                </svg>
                            </button>



                        </router-link>

                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex align-items-center ">
                            <img src="https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg"
                                alt="" style="width: 45px; height: 45px;margin-right:18px" class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Combo ngũ cốc</p>



                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Xuất xứ từ thiên nhiên</p>

                    </td>
                    <td>
                        <p>200.000 VNĐ</p>
                    </td>
                    <td>100</td>
                    <td>
                        <p>Có cho thêm hạt óc chó</p>
                    </td>
                    <td>
                        <router-link :to="{ name: 'editposition' }">
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                    <path d="M16 5l3 3"></path>
                                </svg>
                            </button>



                        </router-link>

                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>