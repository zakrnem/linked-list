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
    size: 0,

    append: function(value) {
      const newNode = Node(value)

      if(!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }

      this.size++
    },

    prepend: function(value) {
      var newNode = Node(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }

      this.size++
    },

    listHead: function() {
      return this.head
    },

    listTail: function() {
      return this.tail
    },

    listSize: function() {
      return this.size
    }
  }
}

module.exports = {
  z: LinkedList
};