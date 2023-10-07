// Define the structure for the linked list node
/*class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the linked list
    addNode(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to find the sum of all elements in the linked list
    findSum() {
      let current = this.head;
      let sum = 0;
      while (current) {
        sum += current.value;
        current = current.next;
      }
      return sum;
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  
  console.log("Linked List Sum:", linkedList.findSum()); // Output: Linked List Sum: 10 */

  // Define the structure for the linked list node
/*class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the linked list
    addNode(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to find the middle element of the linked list
    findMiddle() {
      if (!this.head) {
        return null;
      }
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      return slow.value;
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  
  console.log("Middle Element:", linkedList.findMiddle()); // Output: Middle Element: 3 */
  
  // Define the structure for the linked list node
/*class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the linked list
    addNode(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to delete a node with a specific value from the linked list
    deleteNode(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current) {
        if (current.value === value) {
          prev.next = current.next;
          return;
        }
  
        prev = current;
        current = current.next;
      }
    }
  
    // Method to display the linked list
    displayList() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  
  console.log("Original Linked List:");
  linkedList.displayList(); // Output: 1 2 3 4
  
  linkedList.deleteNode(3); // Delete the node with value 3
  
  console.log("Updated Linked List:");
  linkedList.displayList(); // Output: 1 2 4 */
  'use strict';

process.stdin.setEncoding('utf-8');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
/*
 /** @param {ListNode} head
 * @return {number}
 */
/*var findSumOfOddElements = function (head) {
  let sum = 0;
  let current = head;

  while (current) {
    if (current.val % 2 !== 0) {
      sum += current.val;
    }
    else{
        current.val=0;
    }
    current = current.next;
  }

  return sum;
};

//Dont change anything below. If changed click on reset.
function ListNode(val, next) {
  return {
    val: val,
    next: next == undefined ? null : next,
  };
}

async function readInput() {
  let inputString = '';
  var output = [];
  process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
    const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
    var linklistvalues = inputArr[0].split('->');
    var head = ListNode(parseInt(linklistvalues[0]));
    var temp = head;
    var count = 2;
    for (var i = 1; i < linklistvalues.length; i++) {
      var new_node = ListNode(parseInt(linklistvalues[i]));
      count = count + 1;
      temp.next = new_node;
      temp = new_node;
    }
    var output = findSumOfOddElements(head);
    if (output != null) {
      console.log(output);
    } else console.log(-1);

    process.exit();
  });
}

readInput(); //Find the sum of odd elements in a linked list*/
'use strict';

process.stdin.setEncoding('utf-8');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var remove3rdlastElem = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let count = 0;
  let current = head;

  // First pass: Count the number of nodes in the linked list
  while (current) {
    count++;
    current = current.next;
  }

  // Check if there are at least 3 nodes in the linked list
  if (count < 3) {
    return head;
  }

  // Second pass: Find the 3rd last node
  current = head;
  let prev = null;
  let targetIndex = count - 3;
  let currentIndex = 0;

  while (currentIndex < targetIndex) {
    prev = current;
    current = current.next;
    currentIndex++;
  }

  // Remove the 3rd last node from the linked list
  if (prev) {
    prev.next = current.next;
  } else {
    // If prev is null, it means the 3rd last node is the head
    head = head.next;
  }

  return head;
};

//Dont change anything below. If changed click on reset.
function printLinkList(head) {
  var current = head;
  var linklistString = '';
  while (current.next) {
    linklistString = linklistString + current.val + '->';
    current = current.next;
  }
  linklistString = linklistString + current.val;
  console.log(linklistString);
}

//Dont change anything below. If changed click on reset.
function ListNode(val, next) {
  return {
    val: val,
    next: next == undefined ? null : next,
  };
}

async function readInput() {
  let inputString = '';
  var output = [];
  process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
    const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
    var linklistvalues = inputArr[0].split('->');
    var head = ListNode(parseInt(linklistvalues[0]));
    var temp = head;
    var count = 2;
    for (var i = 1; i < linklistvalues.length; i++) {
      var new_node = ListNode(parseInt(linklistvalues[i]));
      count = count + 1;
      temp.next = new_node;
      temp = new_node;
    }
    head = remove3rdlastElem(head);
    printLinkList(head);

    process.exit();
  });
}

readInput(); //Given a linked list, remove the 3rd last Element of a linked list.
