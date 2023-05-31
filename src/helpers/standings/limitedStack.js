export class limitedStack {
   constructor(capacity) {
      this.capacity = capacity
      this.stack = new Array(capacity)
   }
   push(item) {
      if (this.isFull()) {
         this.stack.shift()
      }
      this.stack.push(item)
   }
   isFull() {
      return this.stack.length === this.capacity
   }
}

export const createForm = () => {
   const form = new limitedStack(5)
   form.push('-')
   form.push('-')
   form.push('-')
   form.push('-')
   form.push('-')
   return form
}
