<template>
  <el-container class="app-container">
    <el-header>
      <h1>心灵时光机</h1>
    </el-header>

    <el-main class="cards-container">
      <div class="card-row">
        <div
          class="card"
          v-for="(card, index) in rowCards"
          :key="`card-${index}`"
          @click="flipCard(card)"
        >
          <div class="card-inner" :class="{ 'is-flipped': card.flipped }">
            <div class="card-face card-front">
              <el-image :src="card.frontImage" fit="cover" />
            </div>
            <div class="card-face card-back">
              <el-image :src="card.backImage" fit="cover" />
              <el-button v-if="card.flipped" class="copy-button" icon="el-icon-share" @click.stop="copyCard(card)"></el-button>
            </div>
          </div>
        </div>
      </div>
    </el-main>

    <el-footer class="footer-content">
      <p>&copy; 2023 - <span>Neal</span> - Design</p>
    </el-footer>
  </el-container>
</template>

<script>
import { energyBackURL, energyFrontURL} from './components/energyURL'; 
import { feelBadBackURL, feelBadFrontURL} from './components/feelBadURL'; 
import { feelGoodBackURL, feelGoodFrontURL} from './components/feelGoodURL'; 
import { giftBackURL, giftFrontURL} from './components/giftURL'; 
import { relationBackURL, relationFrontURL} from './components/relationURL'; 
import { viewBadBackURL, viewBadFrontURL} from './components/viewBadURL'; 
import { viewGoodBackURL, viewGoodFrontURL} from './components/viewGoodURL'; 
import { fightBackURL , fightFrontURL} from './components/fightURL'; 
import { ideaBackURL , ideaFrontURL} from './components/ideaURL'; 

export default {
  data() {
    return {
      inputText: '', // 用户信纸顶部输入的文本
      footerInputText: '', // 用于信纸底部输入框的数据
      cards: [
        {type: 'gift',frontImage: giftBackURL, backImage: '' , flipped: false},
        {type: 'gift',frontImage: giftBackURL, backImage: '' , flipped: false},
        {type: 'idea',frontImage: ideaBackURL, backImage: '' , flipped: false},
        {type: 'viewBad',frontImage: viewBadBackURL, backImage: '' , flipped: false},
        {type: 'viewGood',frontImage: viewGoodBackURL, backImage: '' , flipped: false},
        {type: 'relation',frontImage: relationBackURL, backImage: '' , flipped: false},
        {type: 'fight',frontImage: fightBackURL, backImage: '' , flipped: false},
        {type: 'feelBad',frontImage: feelBadBackURL, backImage: '' , flipped: false},
        {type: 'feelGood',frontImage: feelGoodBackURL, backImage: '' , flipped: false},
        {type: 'energy',frontImage: energyBackURL, backImage: '' , flipped: false},

      ]
    };
  },
  computed: {
    rowCards() {
      return this.cards;
    }
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
      }

      const randomFrontImage = frontImages[Math.floor(Math.random() * frontImages.length)];
      card.backImage = randomFrontImage;

      // 切换翻转状态
      card.flipped = !card.flipped;
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
.app-container {
  background: url('/images/star.gif') repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

.el-header, .el-footer {
  text-align: center;
}

.el-header h1 {
  color: #800080;
}

.cards-container {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  position: relative;
}

.card-row {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.card {
  perspective: 1000px;
  width: 200px;
  height: 300px;
  margin: 0 10px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card-front {
  /* 正面样式 */
}

.card-back {
  transform: rotateY(180deg);
  /* 背面样式 */
}

.is-flipped {
  transform: rotateY(180deg);
}

.footer-content {
  text-align: center;
  width: 100%;
}

.copy-button {
  position: absolute;
  right: 1px;
  bottom: 1px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1;
}

.footer-input {
  background-color: #7b4b94;
  color: white;
}
</style>

