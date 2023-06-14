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
    }
  }
}

function test() {
  const linkedList = LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.append(4)
  linkedList.append(5)
  return linkedList.at(2)
  //linkedList.size()
}

module.exports = {
  z: LinkedList,
  y: test
}