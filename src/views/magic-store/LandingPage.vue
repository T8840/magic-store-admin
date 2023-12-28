<template>
  <el-container class="app-container">
    <el-header>
      <h1>心灵时光机</h1>
    </el-header>

   <el-main class="main-content">
    <!-- 信纸背景和输入区域 -->
    <div class="letter-container">
      <!-- <div class="letter-header-container">来自未来的信件</div> -->
      <div class="input-top-container">
        <el-input
          type="text"
          class="input-field"
          placeholder="谢谢你，我已经（在这里清晰界定自己渴望实现的画面)"
          v-model="inputText"
        />
      </div>  
    </div>

     <!-- Left Side Cards -->
      <div class="side-cards left-cards">
        <el-card class="box-card">
          <el-input
            placeholder="左侧卡片1..."
            v-model="leftCardInput1"
          />
        </el-card>
        <el-card class="box-card">
          <el-input
            placeholder="左侧卡片2..."
            v-model="leftCardInput2"
          />
        </el-card>
      </div>

     <div class="cards-container">
      <div class="card-row">
        <!-- <div
          class="card"
          :class="{ 'flipped': card.flipped }"
          v-for="(card, index) in topRowCards"
          :key="`top-${index}`"
          @click="flipCard(card)"
        > -->
        <div class="card" :class="{ 'flipped': card.flipped }" v-for="(card, index) in topRowCards" :key="`top-${index}`" @click="flipCard(card)">

          <div class="card-face">
            <el-image :src="card.frontImage" fit="cover" />
          </div>
          <div class="card-back">
            <el-image :src="card.backImage" fit="cover" />
            <!-- 复制按钮，仅在卡片翻转时显示 -->
            <el-button v-if="card.flipped" class="copy-button" icon="el-icon-document-copy" @click.stop="copyCard(card)"></el-button>
          </div>
        </div>
      </div>
      <div class="card-row">
        <div
          class="card"
          :class="{ 'flipped': card.flipped }"
          v-for="(card, index) in bottomRowCards"
          :key="`bottom-${index}`"
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
    </div>

    <!-- Right Side Cards -->
      <div class="side-cards right-cards">
        <el-card class="box-card">
          <el-input
            placeholder="右侧卡片1..."
            v-model="rightCardInput1"
          />
        </el-card>
        <el-card class="box-card">
          <el-input
            placeholder="右侧卡片2..."
            v-model="rightCardInput2"
          />
        </el-card>
      </div>

    </el-main>

    <el-footer class="footer-content">
      <div class="footer-input-container">
        <input
          type="text"
          class="input-field footer-input"
          placeholder="在这里输入直觉中的关键行动"
          v-model="footerInputText"
        />
      </div>
      <p>&copy; 2023 - <span>嘉嘉 && Neal && 静怡 </span> - Design</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      inputText: '', // 用户信纸顶部输入的文本
      footerInputText: '', // 用于信纸底部输入框的数据
      leftCardInput1: '',
      leftCardInput2: '',
      rightCardInput1: '',
      rightCardInput2: '',
      // 假设我们有这样的图片资源
      cards: [
        {frontImage: '/images/卡片封面汇总/视觉·正向.png', backImage: '/images/视觉·正向/82.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/关系.png', backImage: '/images/关系/@-卡片封面_0030_58.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/视觉·负向.png', backImage: '/images/视觉·负向/1.png', flipped: false},
        {frontImage: '/images/卡片封面汇总/礼物.png', backImage: '/images/礼物/知足.png', flipped: false},
      ]
    };
  },
  created() {
    // this.cards = this.generateCards();
  },
  computed: {
    // cards() {
    //   return this.generateCards()
    // },
    topRowCards() {
      console.log("---this.cards---:",this.cards.slice(0, 2))
      return this.cards.slice(0, 2);
    },
    bottomRowCards() {
      console.log("---this.cards---:",this.cards.slice(2, 4))

      return this.cards.slice(2, 4);
    },
    
  },
  methods: {
    flipCard(card) {
    const index = this.cards.findIndex(c => c === card);
    if (index !== -1) {
      // 创建一个新的对象，并更新flipped属性
      const newCard = { ...this.cards[index], flipped: !this.cards[index].flipped };
      
      // 更新数组中的卡片对象
      this.cards.splice(index, 1, newCard);
    }
  },
    generateCards() {
      const cardTitles = ['视觉·正向', '关系', '视觉·负向', '礼物'];
      return cardTitles.map(title => ({
        frontImage: `/images/卡片封面汇总/${title}.png`,
        backImage: this.getRandomBackImage(title),
        flipped: false
      }));
    },
    getRandomBackImage(title) {
      switch (title) {
        case '关系':
          const relationIndex = Math.floor(Math.random() * 76) + 1; // 假设有76张图片
          return `/images/关系/@-卡片封面_00${String(relationIndex).padStart(2, '0')}_${88 - relationIndex}.png`;
        case '礼物':
          const gifts = ['爱', '知足', '自由']; // 假设的礼物名称列表
          return `/images/礼物/${gifts[Math.floor(Math.random() * gifts.length)]}.png`;
        case '视觉·负向':
          return `/images/视觉·负向/1.png`;
        case '视觉·正向':
          const visualIndex = Math.floor(Math.random() * 88) + 1; // 假设有88张图片
          return `/images/${title}/${visualIndex}.png`;
        default:
          return '/images/back.png'; // 默认图片
      }
    },
    async copyCard(card) {
      try {
        const response = await fetch(card.backImage);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob
          })
        ]);
        console.log("Image copied to clipboard");
      } catch (error) {
        console.error("Failed to copy image:", error);
      }
    }
  
  }
};
</script>

<style scoped>
.app-container {
  /* Other styles... */
  background: url('/images/星空漫游gif.GIF') no-repeat center center fixed;
  background-size: cover;
}

.main-content {
  display: flex;
  justify-content: space-between;
}

.side-cards {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 卡片之间的间距 */
  align-self: stretch; /* 使得侧边卡片和主要卡片一样高 */
  position: absolute; /* 绝对定位侧边卡片 */
  top: 0;
  bottom: 0;
  padding: 20px 0; /* 顶部和底部的间距 */
}

.left-cards {
   left: 20px; /* 与左侧边缘的距离 */
}

.right-cards {
  right: 20px; /* 与右侧边缘的距离 */
}


.letter-container {
  background: #fffacd; /* 信纸黄色 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* 添加 right: 0 来配合左边距使其水平居中 */
  height: 80%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 保持内容分散对齐 */
  align-items: center; /* 水平居中对齐子元素 */
  padding: 20px;
  box-sizing: border-box;
  max-width: 600px; /* 最大宽度为600px */
  margin: auto; /* 自动边距实现水平居中 */
}


.input-top-container {
  padding-bottom: 20px; /* 与信纸其他边距相同 */
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  outline: none;
}

.el-header,
.el-footer {
  text-align: center;
}

.cards-container {
   z-index: 2; /* 确保卡片在信纸之上 */
  flex-grow: 1; /* 占据可用空间 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px; /* 左右边距 */
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

.copy-button {
  position: absolute;
  right: 1px;
  bottom: 1px;
  border-radius: 50%; /* 圆形按钮 */
  width: 20px; /* 设置按钮宽度 */
  height: 20px; /* 设置按钮高度 */
  padding: 0; /* 重置内边距 */
  display: flex; /* 使用Flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-size: 14px; /* 调整图标大小，如果有必要 */
  line-height: 1; /* 调整行高以确保内容居中 */
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

.footer-input-container {
  position: absolute;
  bottom: -100px; /* 位于卡片下方，根据实际情况调整这个值 */
  left: 0;
  right: 0;
  background-color: #7b4b94; /* 紫色背景 */
  width: 100%; /* 宽度设置为与.cards-container一致 */
  max-width: 600px; /* 最大宽度与信纸相同 */
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(100%); /* 垂直向下移动自身高度的距离 */
}

.input-field {
  /* 输入框样式 */
  width: 100%; /* 输入框宽度填满容器 */
  padding: 10px;
  margin-top: 10px; /* 顶部边距 */
  border: none; /* 去除边框 */
  border-radius: 4px; /* 圆角 */
  font-size: 1em;
  outline: none; /* 去除焦点边框 */
}

.footer-input {
  /* 底部输入框特有的样式 */
  background-color: #7b4b94; /* 紫色背景 */
  color: white; /* 文字颜色为白色 */
}
</style>