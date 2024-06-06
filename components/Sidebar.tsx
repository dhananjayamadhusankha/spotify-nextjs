import { CirclePlus, Heart, Home, Library, Rss, Search } from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex space-x-2 items-center hover:text-white">
          <Home className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-white">
          <Search className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-white">
          <Library className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className=" border-r-[0.1px] border-gray-900" />

        <button className="flex space-x-2 items-center hover:text-white">
          <CirclePlus className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-white">
          <Heart className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex space-x-2 items-center hover:text-white">
          <Rss className="h-5 w-5" />
          <p>Your Episode</p>
        </button>
        <hr className=" border-r-[0.1px] border-gray-900" />

        {/* Playlist */}
        <p className=" cursor-pointer hover:text-white ">Playlist</p>
      </div>
    </div>
  );
}

export default Sidebar;
