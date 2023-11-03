<template>
    <div>

        <img style="
         
          float: left;
          left: 360px;
        
          width: 250px;
          top: 277px;
        " src="https://theme.hstatic.net/1000363117/1000911694/14/lazyload.gif?v=271" width="250px" />
        <div>
            <h3>Đặt hàng thành công</h3>

            <div v-for="customer in customers" :key="customer.id">
                <label><b>{{ customer.gt }}:</b></label>
                <label>{{ customer.hoten }}</label><br>
                <label><b>Số điện thoại:</b> {{ customer.sdt }}</label><br>
                <label><b>Địa chỉ:</b> {{ customer.diachi }}</label><br>
                <label><b>Phương thức thanh toán:</b></label>
                <label>{{ customer.pt }}</label><br>
            </div>


        </div>

        <div class="container">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="display: none;">id_sach</th>
                            <th scope="col">Sách</th>
                            <th style="width: 300px" scope="col">Tên sách</th>
                            <th scope="col">Giá</th>
                            <th style="width: 120px" scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in cart" :key="product.id">
                            <td style="display: none;">
                                <input name="id_sach" type="text" :value="product.id" />
                            </td>
                            <td><img :src="product.hinh" alt="Product Image" class="img" /></td>
                            <td>{{ product.sanpham }}</td>
                            <td>{{ product.dongia }}.000 vnđ</td>
                            <td>
                                <p>{{ product.soluong }}</p>
                            </td>
                            <td>{{ product.tongtien }}.000 vnđ</td>
                        </tr>
                    </tbody>
                    <tr>
                        <td style="background-color: #ccc;">
                            <b>Tổng đơn hàng:</b>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-white">{{ totalAmount }}.000 vnđ</td>
                    </tr>
                </table>

            </div>
            <button style="
            float: right;
            width: 100%;
            overflow: hidden;
            color: #fff;
            height: 50px;
            margin: 10px auto;
            border-radius: 4px;
            background: #00ab9f;
            border-radius: 18px;
            border: 0;
            cursor: pointer;
          ">
                <a style="color: #fff; text-decoration: none" href="index-login.php">Tiếp tục mua hàng</a>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            customers: [],
            cart: [
                {
                    id: 1,
                    hinh:
                        'https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg',
                    sanpham: 'Combo ngũ cốc 1',
                    dongia: 100,
                    soluong: 2,
                    tongtien: 200,
                },
                {
                    id: 2,
                    hinh:
                        'https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg',
                    sanpham: 'Combo ngũ cốc 2',
                    dongia: 150,
                    soluong: 3,
                    tongtien: 450,
                },
                // Add more products as needed
            ],
            customers: [
                {
                    id: 1,
                    gt: 'Anh',
                    hoten: 'John Doe',
                    sdt: '1234567890',
                    diachi: '123 Main Street, City',
                    pt: 'Chuyển khoản qua ngân hàng'
                }
            ],
        };
    },
    computed: {
        totalAmount() {
            return this.cart.reduce((total, product) => total + product.tongtien, 0);
        },
    },
};
</script>
  
<style scoped>
img {
    width: 25%;
    border-radius: 5px;
    padding: 10px;
}

.short-input {
    width: 30%;

    display: inline-block;
    margin: 0;
    padding: 0;
    text-align: center;
}

.btn-success {
    margin-right: 10px;
}
</style>

  