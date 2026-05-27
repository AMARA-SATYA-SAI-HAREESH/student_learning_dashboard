import { fetchCourses } from "@/lib/supabase";
import { HeroTile } from "./HeroTile";
import { CourseCard } from "./CourseCard";
import { ActivityTile } from "./ActivityTile";
import { MotionContainer, MotionItem } from "@/components/ui/Card";

export async function BentoGrid() {
  const courses = await fetchCourses();

  return (
    <MotionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <MotionItem>
          <HeroTile userName="Hareesh" streak={12} />
        </MotionItem>
        <MotionItem>
          <ActivityTile />
        </MotionItem>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, idx) => (
          <article key={course.id}>
            <MotionItem>
              <CourseCard course={course} index={idx} />
            </MotionItem>
          </article>
        ))}
      </div>
    </MotionContainer>
  );
}
