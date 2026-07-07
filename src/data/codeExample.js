export  const CODE_EXAMPLES = {
    "Activity Selection" :{

        javascript: `function activitySelection(start,finish){
        const activities = start.map((s,i)=>({
            start:s,
            finish:finish[i],   
            index:i+1,

            }));
            activities.sort((a, b) => a.finish - b.finish);

             const selected = [];
  let lastFinish = -1;

  for (const activity of activities) {
    if (activity.start >= lastFinish) {
      selected.push(activity.index);
      lastFinish = activity.finish;
    }
  }

  return selected;
}
        
        ` ,

        python: `
    def activity_selection(start, finish):
    activities = list(zip(start, finish, range(1, len(start)+1)))
    activities.sort(key=lambda x: x[1])

    selected = []
    last_finish = -1

    for s, f, idx in activities:
        if s >= last_finish:
            selected.append(idx)
            last_finish = f

    return selected` ,

        java: `
        import java.util.*;
class Activity {
    int start, finish, index;
    Activity(int s, int f, int i) {
        start = s;
        finish = f;
        index = i;
    }
}
public class Main {

    public static List<Integer> activitySelection(int[] start, int[] finish) {

        List<Activity> activities = new ArrayList<>();

        for (int i = 0; i < start.length; i++)
            activities.add(new Activity(start[i], finish[i], i + 1));

        activities.sort(Comparator.comparingInt(a -> a.finish));

        List<Integer> result = new ArrayList<>();
        int lastFinish = -1;

        for (Activity a : activities) {
            if (a.start >= lastFinish) {
                result.add(a.index);
                lastFinish = a.finish;
            }
        }

        return result;
    }
}` ,
        cpp: `
        #include <bits/stdc++.h>
using namespace std;

struct Activity {
    int start, finish, index;
};

bool compare(Activity a, Activity b) {
    return a.finish < b.finish;
}

vector<int> activitySelection(vector<int> start, vector<int> finish) {

    vector<Activity> activities;

    for(int i=0;i<start.size();i++)
        activities.push_back({start[i], finish[i], i+1});

    sort(activities.begin(), activities.end(), compare);

    vector<int> result;
    int lastFinish = -1;

    for(auto a : activities){
        if(a.start >= lastFinish){
            result.push_back(a.index);
            lastFinish = a.finish;
        }
    }

    return result;
}` ,
    },
    "Fractional Knapsack" :{
        javascript: `
        function fractionalKnapsack(items, capacity) {

  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  let totalValue = 0;

  for (const item of items) {

    if (capacity >= item.weight) {

      totalValue += item.value;
      capacity -= item.weight;

    } else {

      totalValue += item.value * (capacity / item.weight);
      break;

    }
  }

  return totalValue;
}` ,
        python: `
    def fractional_knapsack(items, capacity):
        items.sort(key=lambda x: x.value/x.weight, reverse=True)
        total_value = 0
        for item in items:
            if capacity >= item.weight:
                total_value += item.value
                capacity -= item.weight
            else:
                total_value += item.value * (capacity / item.weight)
                break
        return total_value` ,
        java: `import java.util.*;

class Activity {
    int start, finish, index;

    Activity(int start, int finish, int index) {
        this.start = start;
        this.finish = finish;
        this.index = index;
    }
}

public class ActivitySelection {

    public static List<Integer> activitySelection(
            int[] start,
            int[] finish
    ) {

        List<Activity> activities = new ArrayList<>();

        for (int i = 0; i < start.length; i++) {
            activities.add(new Activity(start[i], finish[i], i + 1));
        }

        activities.sort(Comparator.comparingInt(a -> a.finish));

        List<Integer> selected = new ArrayList<>();

        int lastFinish = -1;

        for (Activity activity : activities) {

            if (activity.start >= lastFinish) {

                selected.add(activity.index);
                lastFinish = activity.finish;
            }
        }

        return selected;
    }
}` ,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Activity {
    int start;
    int finish;
    int index;
};

bool compare(Activity a, Activity b) {
    return a.finish < b.finish;
}

vector<int> activitySelection(
    vector<int>& start,
    vector<int>& finish
) {

    vector<Activity> activities;

    for (int i = 0; i < start.size(); i++) {
        activities.push_back({start[i], finish[i], i + 1});
    }

    sort(
        activities.begin(),
        activities.end(),
        compare
    );

    vector<int> selected;

    int lastFinish = -1;

    for (Activity activity : activities) {

        if (activity.start >= lastFinish) {

            selected.push_back(activity.index);
            lastFinish = activity.finish;
        }
    }

    return selected;
}` ,
    },
    "Huffman Coding" :{
        javascript: `
        class Node {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function huffmanCoding(chars, freq) {

  let nodes = chars.map((c, i) => new Node(c, freq[i]));

  while (nodes.length > 1) {

    nodes.sort((a, b) => a.freq - b.freq);

    const left = nodes.shift();
    const right = nodes.shift();

    nodes.push(new Node(null, left.freq + right.freq, left, right));
  }

  return nodes[0];
}` ,
        python: `
  
import heapq


class Node:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None

    def __lt__(self, other):
        return self.freq < other.freq


def build_huffman_tree(chars, freqs):

    heap = []

    for c, f in zip(chars, freqs):
        heapq.heappush(heap, Node(c, f))

    while len(heap) > 1:

        left = heapq.heappop(heap)
        right = heapq.heappop(heap)

        merged = Node(None, left.freq + right.freq)
        merged.left = left
        merged.right = right

        heapq.heappush(heap, merged)

    return heap[0]


def generate_codes(root, code="", codes=None):

    if codes is None:
        codes = {}

    if root is None:
        return codes

    if root.char is not None:
        codes[root.char] = code

    generate_codes(root.left, code + "0", codes)
    generate_codes(root.right, code + "1", codes)

    return codes


def huffman_coding(chars, freqs):
    root = build_huffman_tree(chars, freqs)
    return generate_codes(root)` ,
        java: `
        class Node implements Comparable<Node> {
    char ch;
    int freq;
    Node left, right;

    Node(char ch, int freq) {
        this.ch = ch;
        this.freq = freq;
    }

    Node(int freq, Node left, Node right) {
        this.ch = '\0';
        this.freq = freq;
        this.left = left;
        this.right = right;
    }

    @Override
    public int compareTo(Node other) {
        return this.freq - other.freq;
    }
}

public class HuffmanCoding {

    public static Node buildHuffmanTree(char[] chars, int[] freqs) {

        PriorityQueue<Node> pq = new PriorityQueue<>();

        for (int i = 0; i < chars.length; i++) {
            pq.offer(new Node(chars[i], freqs[i]));
        }

        while (pq.size() > 1) {

            Node left = pq.poll();
            Node right = pq.poll();

            Node merged = new Node(
                left.freq + right.freq,
                left,
                right
            );

            pq.offer(merged);
        }

        return pq.poll();
    }

    public static void generateCodes(
            Node root,
            String code,
            Map<Character, String> codes
    ) {

        if (root == null)
            return;

        if (root.left == null && root.right == null) {
            codes.put(root.ch, code);
            return;
        }

        generateCodes(root.left, code + "0", codes);
        generateCodes(root.right, code + "1", codes);
    }

    public static Map<Character, String> huffmanCoding(
            char[] chars,
            int[] freqs
    ) {

        Node root = buildHuffmanTree(chars, freqs);

        Map<Character, String> codes = new HashMap<>();

        generateCodes(root, "", codes);

        return codes;
    }
}` ,
        cpp: `#include <iostream>
#include <queue>
#include <unordered_map>
#include <vector>
using namespace std;

struct Node {
    char ch;
    int freq;
    Node *left, *right;

    Node(char c, int f) {
        ch = c;
        freq = f;
        left = right = nullptr;
    }

    Node(int f, Node* l, Node* r) {
        ch = '\0';
        freq = f;
        left = l;
        right = r;
    }
};

struct Compare {
    bool operator()(Node* a, Node* b) {
        return a->freq > b->freq;
    }
};

Node* buildHuffmanTree(vector<char>& chars, vector<int>& freqs) {

    priority_queue<Node*, vector<Node*>, Compare> pq;

    for (int i = 0; i < chars.size(); i++) {
        pq.push(new Node(chars[i], freqs[i]));
    }

    while (pq.size() > 1) {

        Node* left = pq.top();
        pq.pop();

        Node* right = pq.top();
        pq.pop();

        Node* merged = new Node(
            left->freq + right->freq,
            left,
            right
        );

        pq.push(merged);
    }

    return pq.top();
}

void generateCodes(
    Node* root,
    string code,
    unordered_map<char, string>& codes
) {

    if (!root)
        return;

    if (!root->left && !root->right) {
        codes[root->ch] = code;
        return;
    }

    generateCodes(root->left, code + "0", codes);
    generateCodes(root->right, code + "1", codes);
}

unordered_map<char, string> huffmanCoding(
    vector<char>& chars,
    vector<int>& freqs
) {

    Node* root = buildHuffmanTree(chars, freqs);

    unordered_map<char, string> codes;

    generateCodes(root, "", codes);

    return codes;
}` ,
    },
          "Dijkstra's Algorithm" :{
        javascript: `
        function dijkstra(graph, start) {

  const dist = {};
  const visited = {};

  for (const node in graph) {
    dist[node] = Infinity;
  }

  dist[start] = 0;

  while (true) {

    let current = null;

    for (const node in dist) {

      if (
        !visited[node] &&
        (current === null || dist[node] < dist[current])
      ) {
        current = node;
      }
    }

    if (current === null) break;

    visited[current] = true;

    for (const neighbor in graph[current]) {

      const newDist =
        dist[current] + graph[current][neighbor];

      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
      }
    }
  }

  return dist;
}` ,
        python: `
import heapq
def dijkstra(graph, start):

    distances = {node: float("inf") for node in graph}
    distances[start] = 0

    priority_queue = [(0, start)]

    while priority_queue:

        current_distance, current_node = heapq.heappop(priority_queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():

            distance = current_distance + weight

            if distance < distances[neighbor]:

                distances[neighbor] = distance
                heapq.heappush(
                    priority_queue,
                    (distance, neighbor)
                )

    return distances` ,
        java: `import java.util.*;

class Pair {
    int node;
    int distance;

    Pair(int node, int distance) {
        this.node = node;
        this.distance = distance;
    }
}

public class DijkstraAlgorithm {

    public static int[] dijkstra(
            List<List<Pair>> graph,
            int source
    ) {

        int n = graph.size();

        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);

        PriorityQueue<Pair> pq = new PriorityQueue<>(
                Comparator.comparingInt(a -> a.distance)
        );

        dist[source] = 0;
        pq.offer(new Pair(source, 0));

        while (!pq.isEmpty()) {

            Pair current = pq.poll();

            int u = current.node;
            int currentDist = current.distance;

            if (currentDist > dist[u])
                continue;

            for (Pair neighbor : graph.get(u)) {

                int v = neighbor.node;
                int weight = neighbor.distance;

                if (dist[u] + weight < dist[v]) {

                    dist[v] = dist[u] + weight;
                    pq.offer(new Pair(v, dist[v]));
                }
            }
        }

        return dist;
    }
}` ,
        cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

vector<int> dijkstra(
    int V,
    vector<vector<pair<int, int>>>& graph,
    int source
) {

    vector<int> dist(V, INT_MAX);

    priority_queue<
        pair<int, int>,
        vector<pair<int, int>>,
        greater<pair<int, int>>
    > pq;

    dist[source] = 0;
    pq.push({0, source});

    while (!pq.empty()) {

        int currentDist = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        if (currentDist > dist[u])
            continue;

        for (auto edge : graph[u]) {

            int v = edge.first;
            int weight = edge.second;

            if (dist[u] + weight < dist[v]) {

                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }

    return dist;
}` ,
    },


};