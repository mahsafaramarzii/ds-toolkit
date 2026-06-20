import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/molecules/Card/Card";
import { Button } from "../components/atoms/Button/Button";
import { destinations } from "../mock/destinations";
import { useState } from "react";
import { Modal } from "../components/molecules/Madol/Modal";



const meta = {
  title: "Showcase/Travel Wishlist",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
      const [wishlist, setWishlist] = useState<number[]>([]);



      const addToWishlist = (id: number) => {
        if (wishlist.includes(id)) return;
      
        setWishlist((prev) => [...prev, id]);
      };


      const removeFromWishlist = (id: number) => {
        setWishlist((prev) =>
          prev.filter((item) => item !== id)
        );
      };

      const [selectedDestination, setSelectedDestination] =
  useState<(typeof destinations)[number] | null>(
    null
  );
  

  

        return (
            
            <div
           
          >
            <div className="mb-8">
            <h2 className="text-2xl font-bold">
  Wishlist
  <span className="ml-2 text-blue-600">
    ({wishlist.length})
  </span>
</h2>

  <div className="  mt-4
    flex
    flex-col
    gap-3
    max-w-2xl">
      {wishlist.length === 0 && (
  <div
    className="
      rounded-lg
 
      p-4
      text-gray-500
    "
  >
    No destinations selected yet.
  </div>
)}
    {wishlist.map((id) => {
      
      const destination = destinations.find(
        (item) => item.id === id
      );
      
  if (!destination) return null;
      return (
        <div
          key={id}
          className="
         
          flex
          items-center
          justify-between
          rounded-lg
          border
          bg-white
          p-3
          shadow-sm " >
          <div className="flex items-center gap-3">
          <img
            src={destination.image}
            alt={destination.city}
            className="
            h-16
            w-16
            rounded-md
            object-cover
            "
          />

<div>
  <p className="font-medium">
    {destination.city}
  </p>

  <p className="text-sm text-gray-500">
    {destination.country}
  </p>

  <p className="text-sm">
    ⭐ {destination.rating}
  </p>
</div>
        </div>

        <Button
  variant="danger"
  className="
    px-3
    py-1
    text-sm
  "
  onClick={() =>
    removeFromWishlist(destination.id)
  }
>
  Remove
</Button>
      </div>
       
      );
    })}
  </div>
</div>

<hr className="my-8 border-gray-300" />
<div    className="grid
              gap-6
              p-6
              w-full
              [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
              
                cursor-pointer
                transition
                hover:-translate-y-1
                hover:shadow-lg
              
            ">
            {destinations.map((destination) =>{
const isAdded =
wishlist.includes(destination.id);
return(
              
              <Card   key={destination.id}  >
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="h-56
                  w-full
                  rounded-md
                  object-cover
                  flex-shrink-0"
                  
                />
      
                <h3 className="mt-4 text-xl font-semibold">
                  {destination.city}
                </h3>
      
                <p className="text-gray-500">
                  {destination.country}
                </p>
      
                <p className="mt-2">
                  ⭐ {destination.rating}
                </p>
                <div className="mt-4 flex gap-2">
                <Button
    variant="secondary"
    className="flex-1"
    onClick={() =>
      setSelectedDestination(destination)
    }
  >
    Details
  </Button>
                <Button
                 disabled={isAdded}
                 className="flex-1"
  onClick={() =>
    addToWishlist(destination.id)
  }
>
{isAdded
    ? "Added ✓"
    : "Add to Wishlist"}
</Button></div>
              </Card>
            )})}
            <Modal
  isOpen={!!selectedDestination}
  onClose={() =>
    setSelectedDestination(null)
  }
  title={selectedDestination?.city}
>
  {selectedDestination && (
    <div className="space-y-4">
      <img
        src={selectedDestination.image}
        alt={selectedDestination.city}
        className="
          h-64
          w-full
          rounded-lg
          object-cover
        "
      />

      <p>
        <strong>Country:</strong>{" "}
        {selectedDestination.country}
      </p>

      <p>
        <strong>Rating:</strong> ⭐{" "}
        {selectedDestination.rating}
      </p>

      <p>
        {selectedDestination.description}
      </p>
    </div>
  )}
</Modal>
            </div>
          </div>
        );
      },
};