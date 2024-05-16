document.addEventListener('alpine:init', () => {
  Alpine.data('cursor', () => ({
    left: 0,
    top: 0,
    visible: false,

    onMouseMove(event) {
      const boundingClientRect = event.currentTarget.getBoundingClientRect()
      const left = event.clientX - boundingClientRect.x
      const top = event.clientY - boundingClientRect.y

      if (left < 0 || top < 0 || left > this.$el.clientWidth || top > this.$el.clientHeight) {
        this.visible = false
        return
      } else {
        this.visible = true
        this.left = left - 50
        this.top = top - 50
      }
    },

    onMouseLeave() {
      this.visible = false
    },
  }))
})
