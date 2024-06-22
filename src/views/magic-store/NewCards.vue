<template>
  <el-container class="app-container-row">
     <!-- 图片A（右上角） -->
     <img src="@/assets/layouts/butterfly_yellow.png" alt="Image A" class="image-top-right">


    <el-header>
      <!-- <h1>心灵时光机</h1> -->
    </el-header>

    <el-main  class="cards-container">

    <div class="content-flex">
       <img src="@/assets/layouts/store.gif" alt="Image C" class="image-left-middle">

      <div class="cards-container-row">
       <div class="card-row">
        <div
          class="card"
          :class="{ 'flipped': card.flipped }"
          v-for="(card, index) in topRowCards"
          :key="`top-${index}`"
          @click="flipCard(card)"
        >
          <div class="card-face">
            <el-image :src="card.frontImage" fit="cover" />
          </div>
          <div class="card-back">
            <el-image :src="card.backImage" fit="cover" />
            <el-button v-if="card.flipped" class="copy-button"  icon="el-icon-share" @click.stop="copyCard(card)"></el-button>
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
          <!-- <div class="card-back" :class="{ 'angel-card-back': card.type === 'angel' }"> -->
          <div class="card-back">
            <el-image :src="card.backImage" fit="cover" />
            <el-button v-if="card.flipped" class="copy-button"  icon="el-icon-share" @click.stop="copyCard(card)"></el-button>
          </div>
        </div>
      </div>
      </div>
      </div>

    <!-- 能量扭蛋卡片 -->
    <div class="card special-card" @click="drawRandomCard">
      <div class="card-inner" :class="{ 'is-flipped': specialCardFlipped }">
        <div class="card-face">
          <!-- 正面图像 -->
          <el-image src="https://bu.dusays.com/2023/12/31/659129829efe9.png" fit="cover" />
        </div>
        <div class="card-back">
          <!-- 背面图像（随机生成） -->
          <el-image :src="currentSpecialCardImage" fit="cover" />
        </div>
      </div>
    </div>

     <!-- 卡片点击弹窗 -->
     <el-dialog v-model="dialogVisible" width="30%" center>
        <img :src="selectedCardImage" class="enlarged-image">
        <el-button class="close-dialog" icon="el-icon-close" @click="closeDialog"></el-button>
      </el-dialog>
    </el-main>

    <el-footer class="footer-content">
      <p>&copy; 2024 - <span>Neal && Jiajia</span> - Design</p>
    </el-footer>

    <!-- 图片B（左下角） -->
    <img src="@/assets/layouts/butterfly_write.png" alt="Image B" class="image-bottom-left">

  </el-container>
</template>

<script>
import { energyBackURL, energyFrontURL} from './components/energyURL2'; 
import { feelBadBackURL, feelBadFrontURL} from './components/feelBadURL'; 
import { feelGoodBackURL, feelGoodFrontURL} from './components/feelGoodURL'; 
import { giftBackURL, giftFrontURL} from './components/giftURL2'; 
import { relationBackURL, relationFrontURL} from './components/relationURL'; 
import { viewBadBackURL, viewBadFrontURL} from './components/viewBadURL'; 
import { viewGoodBackURL, viewGoodFrontURL} from './components/viewGoodURL'; 
import { fightBackURL , fightFrontURL} from './components/fightURL'; 
import { ideaBackURL , ideaFrontURL} from './components/ideaURL'; 
import { angelBackURL, angelFrontURL} from './components/angelURL2'; 


export default {
  data() {
    return {
      currentCardImage: 'https://bu.dusays.com/2023/12/31/659129829efe9.png', // enengy初始卡牌图片
      inputText: '', // 用户信纸顶部输入的文本
      footerInputText: '', // 用于信纸底部输入框的数据
      cards: [
        {type: 'gift',frontImage: giftBackURL, backImage: '' , flipped: false},
        {type: 'idea',frontImage: ideaBackURL, backImage: '' , flipped: false},
        // {type: 'viewBad',frontImage: viewBadBackURL, backImage: '' , flipped: false},
        {type: 'viewGood',frontImage: viewGoodBackURL, backImage: '' , flipped: false},
        // {type: 'relation',frontImage: relationBackURL, backImage: '' , flipped: false},
        {type: 'angel',frontImage: angelBackURL, backImage: '' , flipped: false},
        {type: 'fight',frontImage: fightBackURL, backImage: '' , flipped: false},
        // {type: 'feelBad',frontImage: feelBadBackURL, backImage: '' , flipped: false},
        {type: 'feelGood',frontImage: feelGoodBackURL, backImage: angelFrontURL , flipped: false},
        // {type: 'energy',frontImage: energyBackURL, backImage: '' , flipped: false},
      ],
      dialogVisible: false,
      selectedCardImage: '',
      specialCardFlipped: false, // 特殊卡片翻转状态
      currentSpecialCardImage: '', // 特殊卡片背面图像
    };
  },
  computed: {
    rowCards() {
      return this.cards
    },
    topRowCards() {
      return this.cards.slice(0, 3);
    },
    bottomRowCards() {
      return this.cards.slice(3, 6);
    },
    
  },
  methods: {
    flipCard(card) {
      let frontImages;
      switch (card.type) {
        case 'energy':
          frontImages = energyFrontURL;
          break;
        case 'feelBad':
          frontImages = feelBadFrontURL;
          break;
        case 'feelGood':
          frontImages = feelGoodFrontURL;
          break;
        case 'gift':
          frontImages = giftFrontURL;
          break;
        case 'relation':
          frontImages = relationFrontURL;
          break;
        case 'viewBad':
          frontImages = viewBadFrontURL;
          break;
        case 'viewGood':
          frontImages = viewGoodFrontURL;
          break;
        case 'fight':
          frontImages = fightFrontURL;
          break;
        case 'idea':
          frontImages = ideaFrontURL;
          break;
        case 'angel':
          frontImages = angelFrontURL;
          break;  
      }

      // 从相应数组中随机选择一张图片
      const randomFrontImage = frontImages[Math.floor(Math.random() * frontImages.length)];
      card.backImage = randomFrontImage;
      if (!card.flipped) {
        this.selectedCardImage = randomFrontImage; // 更新弹窗中的图片
        this.dialogVisible = true; // 显示弹窗
      }
      // 翻转卡片逻辑
      const index = this.cards.findIndex(c => c === card);
      if (index !== -1) {
        this.cards.splice(index, 1, { ...this.cards[index], flipped: !this.cards[index].flipped });
      }
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    drawRandomCard() {
      // const randomIndex = Math.floor(Math.random() * energyFrontURL.length);
      // const randomImageUrl = energyFrontURL[randomIndex];
      // this.currentCardImage = randomImageUrl; // 更新卡牌图片

      // 生成随机图像
      const randomIndex = Math.floor(Math.random() * energyFrontURL.length);
      const randomImageUrl = energyFrontURL[randomIndex];
      this.currentSpecialCardImage = randomImageUrl;

      // 翻转卡片并显示弹窗
      this.specialCardFlipped = true;
      this.selectedCardImage = randomImageUrl;
      this.dialogVisible = true;
    },
    copyCard(card) {
      if (navigator.clipboard) {
        // 使用剪贴板 API 复制图片链接
        navigator.clipboard.writeText(card.backImage)
          .then(() => {
            // 可以在这里添加一些反馈，比如显示消息，表示链接已复制
            console.log('链接已复制到剪贴板');
          })
          .catch(err => {
            console.error('无法复制链接', err);
          });
      } else {
        // 剪贴板 API 不可用时的备选方案
        console.error('剪贴板功能不可用');
      }
    }
  
  }
};
</script>

<style scoped>
.app-container-row {
  /* Other styles... */
  background: url('@/assets/layouts/stargif.gif') no-repeat center center fixed; 
  background-size: cover; /* 覆盖整个容器 */
  width: 100%; /* 容器宽度占满整个视口 */
  min-height: 100vh; /* 至少占据整个视口的高度 */
}

.image-top-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;  /* 根据需要调整尺寸 */
  height: auto;
}

.image-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px;  /* 根据需要调整尺寸 */
  height: auto;
}

.el-header,
.el-footer {
  text-align: center;
}

.el-header h1 {
  color: #800080; /* 深紫色 */
}

.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.content-flex {
  display: flex; /* 启用 Flexbox 布局 */
  align-items: stretch; /* 子项拉伸填满交叉轴 */
  width: 100%; /* 容器宽度占满可能的宽度 */
}

.image-left-middle {
  height: auto; /* 高度自适应 */
  object-fit: cover; /* 保持图片比例 */
  margin-right: 20px; /* 与卡片行的间距 */
  margin-left: 40px; /* 与卡片行的间距 */
  max-height: 500px; /* 最大高度限制，根据需要调整 */
}

.cards-container-row {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.card-row {
  display: flex;
  flex-direction: row; /* 水平排列卡牌 */
  justify-content: center; /* 居中对齐 */
  align-items: center;
  margin-bottom: 20px; /* 排与排之间的间距 */
}

.card {
  width: 200px;
  height: 300px;
  margin-bottom: 20px; /* 卡牌之间的垂直间距 */
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

.special-card {
  position: absolute;
  right: 0px; /* 距离右边缘的距离 */
  bottom: 10px; /* 距离底部的距离 */
  width: 150px; /* 卡牌宽度 */
  height: 200px; /* 卡牌高度 */
  /* 根据需要添加其他样式，例如边框、背景等 */
}

.special-card .card-inner {
  /* 与 .card 类似的翻转样式 */

}

.special-card .card-face,
.special-card .card-back {
  /* 与 .card 类似的正反面样式 */
}

.footer-content {
  text-align: center;
  width: 100%; /* 确保footer占满整个宽度 */
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


.footer-input {
  /* 底部输入框特有的样式 */
  background-color: #7b4b94; /* 紫色背景 */
  color: white; /* 文字颜色为白色 */
}




.enlarged-image {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.close-dialog {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
}

/* 添加弹窗样式 */
.el-dialog__body {
  padding: 10px;
}

.el-dialog {
  overflow: hidden; /* 隐藏多余的部分 */
}
</style>