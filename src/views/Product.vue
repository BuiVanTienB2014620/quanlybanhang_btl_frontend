<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-if="product" :key="product._id">
        <img :src="product.imgURL" alt="">
      </div>
      <div class="col-sm-6" v-if="product" :key="product._id">
        <div class="product-details">
          <div class="product-header">
            <h1 style="color: #0077B6">{{ product.TenHH }}</h1>
            <div class="product-price">

              <span class="price-new">{{1 * product.Gia }}.000VNĐ</span>
              <span class="price"> - </span>
              <span class="price-old">{{1.5 * product.Gia }}.000VNĐ</span>
            </div>
            <div class="product-rating">
              <!-- 45 ngôi sao màu vàng -->
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
          <div class="product-info">

            <p><b>Tên Sản Phẩm:</b> {{ product.TenHH }}</p>
            <p><b>Xuất Xứ:</b> Hưng Yên</p>
            <p><b>Hạn Sử Dụng:</b> 12 tháng</p>
            <p><b>Công dụng:</b> {{ product.MoTaHH }}</p>

          </div>

        </div>
        <div class="product-details"  v-if="product" :key="product._id">
          <!-- ...Các phần khác giữ nguyên... -->
         
          <router-link :to="{ name: 'events',params: { id: product._id } }">
            <button id="add-to-cart" class="btn btn-success text-white">Thêm vào giỏ hàng</button>


          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>
  
  
<script>
import ProductService from '../services/hanghoa.service';

export default {
  data() {
    return {
    
      product: [],
    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    
    
  },
  async created() {
    const productId = this.$route.params.id;
    try {
      this.product = await ProductService.get(productId);
    } catch (error) {
      console.error(error);
    }
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


/* Hiệu ứng khi hover vào nút */
.product-quantity button:hover {
  background-color: #005a9e;
  /* Màu nền khi hover */
}

#add-to-cart {
  border-radius: 5px;
}
</style>
  