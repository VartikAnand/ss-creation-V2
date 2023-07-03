type Base = {
    _id: string;
    _type: string;
    _rev: string;
  };
  
  interface Category extends Base {
    viewCount: number;
    githubUrl: string;
    instagramUrl: string;
    Categories: Category[];
    mainImage: Image_2;
    slug: Slug;
    title: string;
    description: string;
  }
  
  interface Image_2 {
    _type: 'image'; // Update the _type to 'image'
    asset: References;
  }
  
  interface References {
    _ref: string;
    _type: string; // Add the _type property
    current: string;
  }
  
  interface Slug {
    _type: 'slug';
    current: string | null;
  }
  
  interface MainImage {
    _type: string;
    asset: References;
  
  }
  
  interface Title {
    _type: string;
    current: string;
  }
  