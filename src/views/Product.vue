<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img
            src="https://img.freepik.com/free-photo/high-angle-beans-arrangement-concept_23-2148648539.jpg?size=626&ext=jpg"
            alt="">
        </div>
        <div class="col-sm-6">
          <div class="product-details">
            <div class="product-header">
              <h1 style="color: #0077B6">Long Nhãn Hưng Yên Hàng Cao Cấp</h1>
              <div class="product-price">
  
                <span class="price-new">320,000VNĐ</span>
                <span class="price">-</span>
                <span class="price-old">190,000VNĐ</span>
              </div>
              <div class="product-rating">
                <!-- 45 ngôi sao màu vàng -->
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
            </div>
            <div class="product-info">
  
              <p>Tên Sản Phẩm: Long Nhãn Sấy</p>
              <p>Xuất Xứ: Hưng Yên</p>
              <p>Hạn Sử Dụng: 12 tháng</p>
              <p>Sử Dụng: dùng ăn vặt, làm nguyên pệu pha chế, nấu chè, nấu nước mát, dùng kèm yến xào,...</p>
  
            </div>
  
          </div>
          <div class="product-details">
            <!-- ...Các phần khác giữ nguyên... -->
            <div class="product-quantity">
              <button id="decrease-quantity" @click="decreaseQuantity">-</button>
              <span id="quantity">{{ quantity }}</span>
              <button id="increase-quantity" @click="increaseQuantity">+</button>
            </div>
            <router-link :to="{name:'events'}" >
              <button id="add-to-cart" class="btn btn-success text-white">Thêm vào giỏ hàng</button>


            </router-link>
          
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        quantity: 1,
      };
    },
    methods: {
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      },
      increaseQuantity() {
        this.quantity++;
      },
    },
  }
  
  
  
  
  
  
  
  
  
  </script>
  
  <style scoped>
  img {
    width: 324px;
  }
  
  .product-rating span {
    color: gold;
    /* Đổi màu thành màu vàng */
  }
  
  .product-details {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
  }
  
  li {
    list-style: none;
  }
  
  .product-info {
    list-style: none;
    padding-left: 0;
  }
  
  .product-action {
    display: flex;
    justify-content: flex-end;
  }
  
  .btn-add-to-cart {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-order-now {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .product-quantity {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .product-quantity button {
    background-color: #0077B6;
    /* Màu nền của nút */
    color: #fff;
    /* Màu chữ trắng */
    border: none;
    border-radius: 50%;
    /* Làm cho nút có hình dạng tròn */
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  }
  
  #quantity {
    margin: 0 10px;
    font-size: 18px;
  }
  
  /* Hiệu ứng khi hover vào nút */
  .product-quantity button:hover {
    background-color: #005a9e;
    /* Màu nền khi hover */
  }
  
  #add-to-cart {
    border-radius: 5px;
  }
  </style>
  