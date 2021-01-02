//action creator
export function createCourse(course) {
  //action
  //all actions must have a type ptoperty
  return { type: "CREATE_COURSE", course: course };
}
