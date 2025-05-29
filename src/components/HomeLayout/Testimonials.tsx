import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const studentReviews = [
  {
    img: "/dreamzone/img/interior-design.jpg",
    name: "student name",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem odit dolores ipsum, ipsa asperiores? Omnis illo ab possimus nam laborum officiis rerum eum perferendis, voluptate ipsa culpa quisquam minus. Ab consequuntur eligendi maiores doloribus suscipit voluptatem repudiandae explicabo ratione possimus sunt natus sit veniam nesciunt`,
  },
  {
    img: "/dreamzone/img/interior-design.jpg",
    name: "student name",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem odit dolores ipsum, ipsa asperiores? Omnis illo ab possimus nam laborum officiis rerum eum perferendis`,
  },
  {
    img: "/dreamzone/img/interior-design.jpg",
    name: "student name",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem odit dolores ipsum, ipsa asperiores? Omnis illo ab possimus nam laborum officiis rerum eum perferendis, voluptate ipsa culpa quisquam minus. `,
  },
];

const Testimonials = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-screen mt-5 flex-center flex-col gap-5"
    >
      <h1 className="text-3xl font-bold mb-4">Our Student&apos;s Say</h1>
      <div className="flex-center gap-5 flex-col lg:flex-row p-2">
        {studentReviews.map((review, index) => (
          <Card
            key={index}
            className="w-full max-w-lg mx-auto shadow-lg hover:shadow-2xl rounded-lg overflow-hidden min-h-[450px]  "
          >
            <CardHeader>
              <CardTitle className="text-center text-lg font-semibold">
                <img
                  src={review.img}
                  alt="sample"
                  className="size-20 rounded-full mx-auto object-cover"
                />
                {review.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-balance">{review.review}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
