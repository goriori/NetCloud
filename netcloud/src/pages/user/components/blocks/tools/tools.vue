<template>
  <div class="tools q-pt-md q-pl-lg">
    <p class="header">Tools</p>
    <div class="description row">
      <p v-for="desc in descriptions" :key="desc" :class="desc.bgcolor">
        <span class="q-pl-sm q-pr-sm">{{ `${desc.name}` }}</span>
        <DescriptionTool :description="desc.description" :bgcolor="desc.bgcolor"/>
      </p>
    </div>
  </div>
</template>

<script>
import DescriptionTool from "./components/popup.vue";
export default {
  name: "BlockTools",
  components: { DescriptionTool },
  data() {
    return {
      descriptions: [
        {
          name: "Photoshop",
          bgcolor: "bg-positive",
          description:
            "Adobe Photoshop — многофункциональный графический редактор, разрабатываемый и распространяемый компанией Adobe Systems. В основном работает с растровыми изображениями, однако имеет некоторые векторные инструменты.",
        },
        {
          name: "Figma",
          bgcolor: "bg-purple-14",
          description:
            "Figma — онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной работы в режиме реального времени. Сервис доступен по подписке, предусмотрен бесплатный тарифный план для одного пользователя. Имеются офлайн-версии для",
        },
        {
          name: "Blander",
          bgcolor: "bg-light-blue",
          description:
            "Blender — профессиональное свободное и открытое программное обеспечение для создания трёхмерной компьютерной графики, включающее в себя средства моделирования, скульптинга, анимации, симуляции, рендеринга, постобработки и монтажа видео со звуком, компоновки с помощью «узлов», а также создания 2D-анимаций.",
        },
        {
          name: "Ilustrator",
          bgcolor: "bg-lime-10",
          description:
            "Adobe Illustrator — векторный графический редактор, разработанный и распространяемый компанией Adobe Systems",
        },
        {
          name: "3DMax",
          bgcolor: "bg-orange-8",
          description:
            "Autodesk 3dsMax — профессиональное программное обеспечение для 3D-моделирования, анимации и визуализации при создании игр и проектировании. В настоящее время разрабатывается и издается компанией Autodesk. Программа доступна по подписке от одного месяца до трёх лет для коммерческих целей.",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.tools {
  max-width: 370px;
  width: 370px;
  max-height: 156px;
  height: 156px;
  border: 1px solid #46b0e4;
  border-radius: 30px;

  .header {
    font-size: 20px;
  }
  .description {
    p {
      margin-right: 10px;
      font-size: 15px;
      border: 1px solid white;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>