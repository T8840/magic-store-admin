<template>
  <el-container class="app-container">
    <el-header>
      <h1>心灵时光机</h1>
    </el-header>

     <el-main class="cards-container">
      <div class="card-row">
        <div
          class="card"
          :class="{ 'flipped': card.flipped }"
          v-for="(card, index) in rowCards"
          :key="`top-${index}`"
          @click="flipCard(card)"
        >
          <div class="card-face">
            <el-image :src="card.frontImage" fit="cover" />
          </div>
          <div class="card-back">
            <el-image :src="card.backImage" fit="cover" />
          </div>
        </div>
      </div>
     
    </el-main>

    <el-footer class="footer-content">
      <p>&copy; 2023 - <span>Neal </span> - Design</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      inputText: '', // 用户信纸顶部输入的文本
      footerInputText: '', // 用于信纸底部输入框的数据
      // 假设我们有这样的图片资源
      cards: [
        {frontImage: '/images/卡片封面汇总/视觉·正向.png', backImage: '/images/视觉·正向/82.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/关系.png', backImage: '/images/关系/@-卡片封面_0030_58.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/视觉·负向.png', backImage: '/images/视觉·负向/1.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/礼物.png', backImage: '/images/礼物/知足.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/@能量扭蛋机 封面.png', backImage: '/images/能量扭蛋机/Begin.jpg', flipped: false},
        {frontImage: '/images/卡片封面汇总/觉察·正向.png', backImage: '/images/觉察·正向/价值.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/觉察·负向.png', backImage: '/images/觉察·负向/不配.png', flipped: false},

      ]
    };
  },
  computed: {
    rowCards() {
      return this.cards
    },
    
  },
  methods: {
    flipCard(card) {
      // 查找卡片在原始数组中的索引
      const index = this.cards.findIndex(c => c === card);
      // 检查是否找到了卡片
      if (index !== -1) {
        this.cards.splice(index, 1, { ...this.cards[index], flipped: !this.cards[index].flipped });
      }
    }
  }
};
</script>

<style scoped>
.app-container {
  /* Other styles... */
  background: url('/images/sky.png') no-repeat center center fixed;
  background-size: cover;
}

.el-header,
.el-footer {
  text-align: center;
}

.cards-container {
  z-index: 2; /* 确保卡片在信纸之上 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px; /* 调整padding以确保卡片和信纸底部对齐 */
  position: relative;
}

.card-row {
  display: flex;
  justify-content: center;
  margin: 10px 0; /* This creates a 20px gap between rows */
}

.card {
  width: 200px;
  height: 300px;
  margin: 0 10px; /* This creates a 20px gap between cards */
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.card-face,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card-back {
  transform: rotateY(180deg);
}

.card.flipped .card-face {
  transform: rotateY(-180deg);
}

.card.flipped .card-back {
  transform: rotateY(0deg);
}

.footer-content {
  text-align: center;
  width: 100%; /* 确保footer占满整个宽度 */
}




.footer-input {
  /* 底部输入框特有的样式 */
  background-color: #7b4b94; /* 紫色背景 */
  color: white; /* 文字颜色为白色 */
}
</style>