import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Async actions
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get(`${API_URL}/blogs?page=1`, {
    headers: {
      "x-api-key": "ec9695de-e188-4e83-a51a-07b84ad2635f",
    },
  });
  return response.data.data;
});

export const detailBlogs = createAsyncThunk(
  "blogs/detailBlogs",
  async ({ id }) => {
    const response = await axios.get(`${API_URL}/blogs/${id}`, {
      headers: {
        "x-api-key": "ec9695de-e188-4e83-a51a-07b84ad2635f",
      },
    });
    return response.data;
  }
);

export const fetchPortfolios = createAsyncThunk(
  "portfolios/fetchPortfolios",
  async () => {
    const response = await axios.get(`${API_URL}/portfolios?page=1`, {
      headers: {
        "x-api-key": "ec9695de-e188-4e83-a51a-07b84ad2635f",
      },
    });
    return response.data.data;
  }
);

export const detailPortfolios = createAsyncThunk(
  "portfolios/detailPortfolios",
  async ({ id }) => {
    const response = await axios.get(`${API_URL}/portfolios/${id}`, {
      headers: {
        "x-api-key": "ec9695de-e188-4e83-a51a-07b84ad2635f",
      },
    });
    return response.data;
  }
);

export const fetchTestimonial = createAsyncThunk(
  "testimonial/fetchTestimonial",
  async () => {
    const response = await axios.get(`${API_URL}/testimonials?limit=2`, {
      headers: {
        "x-api-key": "ec9695de-e188-4e83-a51a-07b84ad2635f",
      },
    });
    return response.data.data;
  }
);

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async () => {
  const response = await axios.get(
    `${API_URL}/teams?usernames[0]=oreoryza&usernames[1]=emir&usernames[2]=minato`,
    {
      headers: {
        "x-api-key": "ec9695de-e188-4e83-a51a-07b84ad2635f",
      },
    }
  );
  return response.data.data;
});

export const postContact = createAsyncThunk("contact/postContact", async (form) => {
  const response = await axios.post(`${API_URL}/contact`, form);
  return response.data;
});

// Initial state
const initialState = {
  loading: false,
  error: null,
  blogs: [],
  blog: {},
  portfolios: [],
  portfolio: {},
  testimonials: [],
  teams: [],
  contact: {},
};

// Slice
const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  extraReducers: (builder) => {
    builder
      // Fetch Blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Detail Blogs
      .addCase(detailBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(detailBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Portfolios
      .addCase(fetchPortfolios.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Detail Portfolios
      .addCase(detailPortfolios.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailPortfolios.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolio = action.payload;
      })
      .addCase(detailPortfolios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Testimonial
      .addCase(fetchTestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Teams
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Post Contact
      .addCase(postContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(postContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchSlice.reducer;
