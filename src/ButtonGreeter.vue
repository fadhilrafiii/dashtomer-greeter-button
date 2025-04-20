<script setup>
import { defineProps } from 'vue'

const { message } = defineProps({
  message: {
    type: String,
    required: true,
  },
})

const handleClick = () => {
  console.log(message)
}
</script><template>
  <button @click="handleClick" class="greeter-btn" v-bind="$attrs">
    Click Me
  </button>
</template>
<style scoped>
.greeter-btn {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #305cde;
  color: white;
  font-size: 16px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
}

.greeter-btn:hover {
  background-color: #193cb8;
}
</style>
