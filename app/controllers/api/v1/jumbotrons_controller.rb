class Api::V1::JumbotronsController < ApplicationController

def index
    jumbotron = Jumbotron.all
    render json: jumbotron
end

def update
    jumbotron = Jumbotron.find(params[:id])
    if jumbotron.update_attributes(jumbo_params)
        render json: jumbotron
    else
        render json: jumbotron.errors, status: :unprocessable_entity
end

end

private
    def jumbo_params
        params.require(:jumbotron).permit(:line1, :line2, :line3)
    end
end

# def update
#     update_review = review_params
#     update_review["rating"] = update_review["rating"].to_i * 20
#     if current_user.id === params["review"]["user_id"]
#       if Review.update(params[:id], update_review)
#         update_review["rating"] = update_review["rating"].to_i / 20
#         render status: 200, json: update_review
#       end
#     else
#       render status: 406, json: update_review
#     end
#   end

#   private
#   def review_params
#     params.require(:review).permit(:rating, :comment, :restaurant_id)
#   end
# end



# def update
#     respond_to do |format|
#       if @topic.update(topic_params)
#         format.html { redirect_to topics_path, notice: 'Topic was successfully updated.' }
#         format.json { render :show, status: :ok, location: @topic }
#       else
#         format.html { render :edit }
#         format.json { render json: @topic.errors, status: :unprocessable_entity }
#       end
#     end
#   end

#   # Never trust parameters from the scary internet, only allow the white list through.
#   def topic_params
#     params.require(:topic).permit(:title, :description)
#   end
# end