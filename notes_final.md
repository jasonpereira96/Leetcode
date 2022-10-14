- Linked in bio
# Tree

An inorder traversal of a BST gives its nodes in sorted order.

# Graph Theory

A graph, G, is a tree iff the following two conditions are met:

- G is fully connected. In other words, for every pair of nodes in G, there is a path between them.
- G contains no cycles. In other words, there is exactly one path between each pair of nodes in G.

Depending on how much graph theory you know, there's a better definition for determining whether or not a given graph is a tree.

For the graph to be a valid tree, it must have exactly n - 1 edges. Any less, and it can't possibly be fully connected. Any more, and it has to contain cycles. Additionally, if the graph is fully connected and contains exactly n - 1 edges, it can't possibly contain a cycle, and therefore must be a tree!

These facts are fairly straightforward to prove. We won't go into why they are true here, but if you're not familiar with these facts, then we recommend reading up on graph theory. It is very important to be confident with graph theory in-order to pass the interviews at a top tech company.

### Important Algorithms
- BFS
- DFS
- Dijikstras
- Kruskals
- A*
-  Lomuto's partition algorithm
-  Hoare's partition algorithm
- Quickselect

# Union Find

### How to keep track of the number of groups(islands) in a union find externally.
Every time we see 2 nodes that are not connected, we union them, and then the number of islands reduce by 1
If they are connected, then don't need to do anything because they already are connected.

```javascript
const ds = new DisjointSet(n);
let islandsCount = n; // assume that all the nodes are not connected initially
for (const [from, to] of edges) {
    if (!ds.isConnected(from, to)) {
        ds.union(from, to);
        islandsCount--;        
    } 
}
// at the end islandsCount is the number of groups
```

### Quicksort
- Quicksort 
- Quickselect (comes up often in as a solution to many questions)

### Mergesort
- mergesort (ratta)

### Hashtable
- understand all of the different collision mitigation mechanisms, understand what amortized constant-time means
### Linked Hash Map

### Heap
- Implementation of Heap
- bubbling algorithms
- `K` problems
#### Heap Patterns
- https://leetcode.com/discuss/general-discussion/1127238/master-heap-by-solving-23-questions-in-4-patterns-category
- Top K Pattern
- Merge K sorted pattern
- Two Heaps Pattern
- Minimum number Pattern

### Tries
- Implementation

```javascript
class TrieNode {
    constructor() {
        this.letters = {}; //  or an array of length 26
        this.isWord = false;
        this.word = null // we can actually store the whole word on the nodes which have words
        // this is a neat trick is we need to look up words quickly
    }
}
```

### Tree
- 3 facts about BST: https://leetcode.com/problems/delete-node-in-a-bst/solution/


### Bit Manip

- write a method to determine if the bit-wise representation of an integer is a palindrome
- Little Endian / big Endian
- Remember the propoerties of XOR-
- XOR is commutative, etc...
- https://leetcode.com/problems/single-number/
- XOR tricks => https://florian.github.io/xor-trick/
```
x ^ x = 0;
```

Here is an interview tip for bit manipulation problems: if you don't know how to start, start from computing XOR for your input data. Strangely, that helps out for quite a lot of problems, Single Number II, Single Number III, Maximum XOR of Two Numbers in an Array, Repeated DNA Sequences, Maximum Product of Word Lengths, etc.

- Anding the two numbers n and n - 1 always flips the least significant 11-bit in nn to 00, and keeps all other bits the same.
- swap alternating bits of a number
- converting endianness of a number

https://www.techinterviewhandbook.org/algorithms/binary/

- one's complement
- two's complement

### DP

#### 0/1 Knapsack
- The maximum obtainable value by including item i is thus = the value of item i itself + the maximum value that can be obtained with the remaining capacity of the knapsack. 

`DP[i, w] = max(DP[i-1, w], P[i] + DP[i-1, w - W[i]])`


### Networking
- Sockets
- TCP/IP
- network Layers
- You should know what HTTP actually is. Learn your networking layers and what's responsible for what You don't need to know all of the details of the protocols, but you should know some of them and that they exist. This sounds daunting, it should only take a couple of hours.

### Testing
- TDD


# Resume
 - https://www.reddit.com/r/cscareerquestions/wiki/faq_resumes/


### References

- LinkedIn Bio: https://www.linkedin.com/in/divyank-shukla/
- LinkedIn Bio: https://www.linkedin.com/in/gurleen-k/
- Venky
- https://i.redd.it/geoorvfwwhx81.png
- https://imgur.com/a/0MTmvgA
- https://i.redd.it/cqfjfde0q3w71.png
- https://www.reddit.com/r/EngineeringResumes/wiki/index/
- https://www.linkedin.com/posts/diegogranadosh_prouctmanagement-resume-activity-6986355775677882368-Bsmo?utm_source=share&utm_medium=member_android
- http://www.evykassirer.com/resume
- Angela Xu


### Articles
- How to prep for tech interview: https://www.reddit.com/r/cscareerquestions/comments/1jov24/heres_how_to_prepare_for_tech_interviews/
- https://www.reddit.com/r/cscareerquestions/comments/n5spv/getting_a_job_in_software_development_a_reddit/
- http://steve-yegge.blogspot.com/2008/03/get-that-job-at-google.html


### System Design
- https://github.com/coding-parrot/Low-Level-Design

#### Message
https://www.linkedin.com/in/ansulgoenka/

### Recruiters
- https://www.linkedin.com/in/madeleine-lorraine?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA-P--8BPlQn-DYfDhOH1hnzNpUw0OfVZpA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BuJhYNHyEQL%2BncErk%2BTy8Pg%3D%3D
- https://www.linkedin.com/in/kayleighbottini?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAp4EosB8WTiLMbK-hSDQa7V9WxerbfUeQQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BRVA8KPVSQAGBl1aM58yMUg%3D%3D
- https://www.linkedin.com/in/oliviablack?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABqA4SkBinhP-8Dbci2pSSJMrqAsuIbSg2Q&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BRVA8KPVSQAGBl1aM58yMUg%3D%3D

### Messages to write
- to a SDE for jobs
- to a recruiter


### Burnout
- https://index.medium.com/reflections-on-burnout-bea0ebf87b9