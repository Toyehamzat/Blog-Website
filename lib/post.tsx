import fs, { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const PostDirirectory = path.join(process.cwd(), "blogpost");

export function GetSortedPostsData() {
  //get files under post directory
  const fileNames = fs.readdirSync(PostDirirectory);
  const allPostData = fileNames.map((fileName) => {
    //remove .md from file name to get id
    const id = fileName.replace(/\.md$/, "");
    //read markdown file as string
    const fullPath = path.join(PostDirirectory, fileName);
    const fileContent = readFileSync(fullPath, "utf8");

    //use graymatter to parse file content
    const matterResult = matter(fileContent);

    const title = matterResult.data.title;

    const date = matterResult.data.date;

    const BlogPost: BlogPost = {
      id,
      title,
      date,
    };
    return BlogPost;
  });
  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function GetPostData(id: string) {
  const fullPath = path.join(PostDirirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterData = matter(fileContent);

  const ProcessedContent = await remark()
        .use( remarkHtml )
        .process(matterData.content);

  const contentHtml = ProcessedContent.toString();

  const BlogPostHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterData.data.title,
    date: matterData.data.date,
    contentHtml,
  };

  return BlogPostHtml;
}
