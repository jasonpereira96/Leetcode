class TrieNode {
    constructor(isWord) {
        this.children = new Array(26).fill(null);
        this.isWord = isWord;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        var current = this.root;
        for (var ch of word) {
            var index = getIndex(ch);
            if (!current.children[index]) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        current.isWord = true;
    }
    startsWith(word) {
        var current = this.root;
        for (var ch of word) {
            var index = getIndex(ch);
            if (!current.children[index]) {
                return false;
            }
            current = current.children[index];
        }
        return true;
    }
    search(word) {
        var current = this.root;
        for (var ch of word) {
            var index = getIndex(ch);
            if (!current.children[index]) {
                return false;
            }
            current = current.children[index];
        }
        return current.isWord === true;
    }
}
function getIndex(char) {
    return char.charCodeAt(0) - 97;
}


var trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
console.log(trie.insert("app"));   
console.log(trie.search("app"));     // returns true