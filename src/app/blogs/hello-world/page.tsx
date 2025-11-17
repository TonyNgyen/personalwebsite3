import BlogContainer from "@/components/BlogComponents/BlogContainer";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import BlogSection from "@/components/BlogComponents/BlogSection";
import React from "react";

function Page() {
  return (
    <BlogContainer>
      <div>
        <BlogHeader date="May 30, 2025">Hello World!</BlogHeader>
      </div>

      <BlogSection>
        This is the third version of my personal website and my favorite. My
        past two versions felt uninspiring to work on and eventually became
        things that I was not proud of which is something I want to avoid in all
        of my coding endeavors.
      </BlogSection>
      <BlogSection>
        I have added ways for me to keep people updated on what I&apos;ve been
        up to through the Notes and Blogs sections which also serve as a way for
        me to remember things that I have done to keep me motivated. Eventually,
        I hope to be come a better writer for these kind of things since I
        haven&apos;t documented my coding progress at all, and it feels weird to
        write about code in a blog format.
      </BlogSection>
      <BlogSection>
        This blog is going to be short since I just want to introduce this
        website and my motivations behind making it. There will be more to come,
        and I am excited for what is to come as I have a lot of ideas for this
        website and my other projects!
      </BlogSection>
    </BlogContainer>
  );
}

export default Page;
