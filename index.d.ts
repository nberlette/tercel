declare module '*.css' {
  const content: { [cssClass: string]: string };
  export default content;
}

declare module 'tercel' {
  const content: any;
  export default content;
}
