/*

Note: Create a data transformation pipeline using only .filter(), .map(), and .reduce(). Do not use for, forEach, while, or for...of loops.

- Start with an array of 20 mock blog post objects (title, author, category, views, publishedDate) and: filter published only, map to title+author pairs, reduce to a views-per-category summary object.

Your Tasks
-------------
1. Filter only the published blog posts.
2. Map the filtered posts into this format:
3. Reduce the published posts into an object that shows the total views per category.


*/
const blogPosts = [
  {
    title: "Mastering JavaScript Closures",
    author: "John Smith",
    category: "JavaScript",
    views: 1250,
    published: true,
    publishedDate: "2025-01-15",
  },
  {
    title: "React Hooks Deep Dive",
    author: "Sarah Johnson",
    category: "React",
    views: 3400,
    published: true,
    publishedDate: "2025-02-10",
  },
  {
    title: "CSS Grid Complete Guide",
    author: "Mike Brown",
    category: "CSS",
    views: 2100,
    published: false,
    publishedDate: "2025-03-05",
  },
  {
    title: "Understanding Async Await",
    author: "Emma Wilson",
    category: "JavaScript",
    views: 4500,
    published: true,
    publishedDate: "2025-01-22",
  },
  {
    title: "Tailwind CSS for Beginners",
    author: "David Lee",
    category: "CSS",
    views: 1850,
    published: true,
    publishedDate: "2025-04-12",
  },
  {
    title: "Building REST APIs with Node.js",
    author: "Sophia Davis",
    category: "Node.js",
    views: 5200,
    published: true,
    publishedDate: "2025-02-18",
  },
  {
    title: "TypeScript Fundamentals",
    author: "James Miller",
    category: "TypeScript",
    views: 2750,
    published: false,
    publishedDate: "2025-03-21",
  },
  {
    title: "React Performance Optimization",
    author: "Olivia Garcia",
    category: "React",
    views: 4100,
    published: true,
    publishedDate: "2025-05-01",
  },
  {
    title: "Modern ES6 Features",
    author: "Daniel Martinez",
    category: "JavaScript",
    views: 3200,
    published: true,
    publishedDate: "2025-04-15",
  },
  {
    title: "CSS Animations Masterclass",
    author: "Emily Anderson",
    category: "CSS",
    views: 1950,
    published: true,
    publishedDate: "2025-02-28",
  },
  {
    title: "Node.js Event Loop Explained",
    author: "William Thomas",
    category: "Node.js",
    views: 3800,
    published: true,
    publishedDate: "2025-03-10",
  },
  {
    title: "Advanced TypeScript Patterns",
    author: "Ava Taylor",
    category: "TypeScript",
    views: 2900,
    published: true,
    publishedDate: "2025-04-25",
  },
  {
    title: "React Router in Practice",
    author: "Noah White",
    category: "React",
    views: 2400,
    published: false,
    publishedDate: "2025-01-30",
  },
  {
    title: "JavaScript Event Delegation",
    author: "Lucas Harris",
    category: "JavaScript",
    views: 3600,
    published: true,
    publishedDate: "2025-05-08",
  },
  {
    title: "Responsive Design Principles",
    author: "Mia Clark",
    category: "CSS",
    views: 1700,
    published: true,
    publishedDate: "2025-03-14",
  },
  {
    title: "Express.js Middleware Guide",
    author: "Benjamin Lewis",
    category: "Node.js",
    views: 3100,
    published: false,
    publishedDate: "2025-02-05",
  },
  {
    title: "Generics in TypeScript",
    author: "Charlotte Walker",
    category: "TypeScript",
    views: 2600,
    published: true,
    publishedDate: "2025-04-08",
  },
  {
    title: "Understanding React Context API",
    author: "Henry Hall",
    category: "React",
    views: 4300,
    published: true,
    publishedDate: "2025-05-15",
  },
  {
    title: "JavaScript Array Methods",
    author: "Amelia Allen",
    category: "JavaScript",
    views: 2800,
    published: true,
    publishedDate: "2025-01-12",
  },
  {
    title: "Node.js Authentication System",
    author: "Ethan Young",
    category: "Node.js",
    views: 4900,
    published: true,
    publishedDate: "2025-05-20",
  },
];

const publishedBlog = blogPosts
  .filter((blog) => {
    return blog.published === true;
  })
  .map((blog) => {
    return { title: blog.title, author: blog.author };
  });
console.log(publishedBlog);

const viewsPerCategory = blogPosts.reduce((acc, blog) => {
  const category = blog.category;

  if (!acc[category]) {
    acc[category] = blog.views;
  } else {
    acc[category] += blog.views;
  }

  return acc;
}, {});
console.log(viewsPerCategory);

/*

Write 5 closure examples: counter, memoize, once, partial application, debounce.

*/

/* 

1. Counter Closures 
Create a function createCounter() that:

Starts with 0
Returns an inner function
Each time the inner function is called, it increments and returns the current count

*/

function createCounter() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/*

2. Memoize Closure

Create a function memoize(fn) that:

Accepts a function as an argument
Stores previously computed results
Returns cached results for repeated inputs instead of recalculating

*/

function memoize(fn){
    let cache = {};
    return function(num){
        if(cache[num] !== undefined){
            return cache[num];
        }
        const result = fn(num);
        cache[num] = result;

        return result;
    }
}
const square = memoize((num)=>{
    console.log(`Calculating...`);
    return num * num;
})

console.log(square(5));
console.log(square(5));
console.log(square(5));
