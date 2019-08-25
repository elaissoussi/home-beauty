package com.elaissoussi.back.entities;

import java.util.List;

public class ProductList {
    
    private List<Category> categories;

    public List<Category> getCategories() {
      return categories;
    }

    public void setCategories(List<Category> categories) {
      this.categories = categories;
    }
}
