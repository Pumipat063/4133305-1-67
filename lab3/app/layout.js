export default function BlogLayout({ children }) {
  return (
    <html>
      <body>
        <div>Blog Menu</div>
        {children}
        <div>footer</div>
      </body>
    </html>
  );
}
