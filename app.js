function Node(value, nextNode) {
  return {
    value: value,
    nextNode: null,  
  }
}

function LinkedList(value, nextNode) {
  return {
    head: null,
    tail: null,

    append: function(value) {
      const newNode = Node(value)

      if(!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.nextNode = newNode
        this.tail = newNode
      }
    },

    prepend: function(value) {
      var newNode = Node(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.nextNode = this.head;
        this.head = newNode;
      }
    },

    listHead: function() {
      return this.head
    },

    listTail: function() {
      return this.tail
    },

    size: function() {
      let tmp = this.head
      let counter = 0
      while (tmp != null) {
        counter++
        tmp = tmp.nextNode
      }
      return counter
    },

    at: function(index) {
      let tmp = this.head
      let counter = 0
      while (tmp != null) {
        counter++
        tmp = tmp.nextNode

        if (counter === index) {
          return tmp
        }
      }
    },

    contains: function(value) {
      let tmp = this.head
      while (tmp != null) {
        if (tmp.value === value) return true
        tmp = tmp.nextNode
      }
      return false
    },

    find: function(value) {
      let tmp = this.head
      let counter = 0
      while (tmp != null) {
        counter++
        if (tmp.value === value) return counter
        tmp = tmp.nextNode
      }
      return false
    },

    toString: function() {
      let tmp = this.head
      let string = ''
      while (tmp != null) {
        string += `( ${tmp.value} ) -> `
        tmp = tmp.nextNode
      }
      return string + ' null'
    },

    pop: function() {
      let listLength = this.size()
      let tmp = this.head
      let counter = 0
      while (counter < listLength) {
        counter++
        if (counter === listLength-1) {
          tmp.nextNode = null
          return this.toString()
        }
        tmp = tmp.nextNode
      }
    },

    replaceAt: function(value, index) {
      let tmp = this.head
      let counter = 0
      while (counter < index+1) {
        counter++
        if (counter === index) {
          tmp.value = value
        }
        tmp = tmp.nextNode
      }
      return this.toString()
    }
  }
}

function test() {
  const linkedList = LinkedList()
  linkedList.append('BMW')
  linkedList.append('Mercedes')
  linkedList.append('Volvo')
  linkedList.append('Skoda')
  linkedList.append('Peugeot')
  return linkedList.insertAt('Ford', 2)
  //linkedList.pop()
  //linkedList.toString()
  //linkedList.find('Skoda')
  //linkedList.contains('Ford')
  //linkedList.contains('Peugeot')
  //linkedList.at(2)
  //linkedList.size()
}

module.exports = {
  z: LinkedList,
  y: test
}