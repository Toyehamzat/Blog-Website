import fs, { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

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
