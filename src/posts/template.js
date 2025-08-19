import "./post.css";

const post1 = {
  slug: "template-post",
  title: "Writing Blog Posts",
  author: "John Smith",
  date: "2025-08-17",
  tags: ["template", "JSX"],
  summary: "This is a template that can be used to write blog posts.",
  content: (
    <>
      <p>This is a template to help you start with your blogging journey.</p>

      <ul className="blog-ul">
        Below is a short description about each keyword or option used in this template blog:
        <li><strong>slug</strong> (string, required): A unique identifier for the post, it&apos;ll be used in the URL. So, try to avoid using any spaces.</li>
        <li><strong>title</strong> (string, required): The title of your blog post.</li>
        <li><strong>author</strong> (string, optional): Who wrote the post. If omitted, you might default to &quot;Anonymous&quot;.</li>
        <li><strong>date</strong> (string, optional): The date of publication, in YYYY-MM-DD format.</li>
        <li><strong>tags</strong> (array of strings, optional): Keywords or topics associated with the post. The tags will help you to filter the blog posts based on a topic.</li>
        <li><strong>summary</strong> (string, optional): A short description to show in previews or listings.</li>
        <li><strong>content</strong> (JSX, optional but recommended): The main content of the post. Can include HTML-like JSX tags, paragraphs, headings, lists, or code snippets.</li>
      </ul>

      <br />

      <h4>Example Content</h4>
      <p>
        Here&apos;s how you might write the content section of a post. Notice that you can use JSX to structure your text:
      </p>
      <pre>
        <code>{`content: (
  <>
    <p>This is a paragraph introducing your post.</p>
    <h2>Section Title</h2>
    <p>More detailed content goes here.</p>
  </>
)`}</code>
      </pre>
    
    <br />
    <h4>Listing the Blog Post</h4>
    To add a new blog post, follow these steps:

    <ol style={{ paddingLeft: '25px' }}>
      <li>Create a new JavaScript file in <code className="inline-code">`src/posts/`</code> directory. Example, <code className="inline-code">new_post.js</code>.</li>
      <li>Create a copy of the <code className="inline-code">template.js</code> file.</li>
      <li>Name the file based on your topic. Choose self-explanatory names for files.</li>
      <li>Add the content to the file and save it.</li>
      <li>Import the newly created post in <code className="inline-code">src/posts/index.js</code> file. Example, <code className="inline-code">import postX from &quot;./new_post&quot;</code>.</li>
      <li>Add it to the post listings, i.e., <code className="inline-code">const posts = [template, postX];</code>.</li>
      <li>Congratulations! 🎉
      your post is live now.</li>
    </ol>


    </>
  ),
};

export default post1;
