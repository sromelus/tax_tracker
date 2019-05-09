class TripsController < ApplicationController

    def index
      @user = current_user
    end

    def new
      @user = current_user
    end

end

# before_action :authorize_user, except: [:index, :show]
#
#   def index
#     if !params[:line]
#       @stops = Stop.all
#       @line = "All Lines"
#       @color = ""
#     else
#       @stops = Stop.where(line: params[:line])
#       @line = "#{params[:line]} Line"
#       @color = params[:line]
#     end
#   end
#
#   def show
#   end
#
#   def new
#     @stop = Stop.new
#   end
#
#   def create
#     @stop = Stop.new(stop_params)
#     if @stop.save
#       flash[:notice] = "stop created successfully"
#       redirect_to @stop
#     else
#       flash.now[:error] = @stop.errors.full_messages.join(", ")
#       render action: :new
#     end
#   end
#
#   private
#   def stop_params
#     params.require(:stop).permit(:name)
#   end
#
#   def authorize_user
#     if !user_signed_in? || !current_user.admin?
#       raise ActionController::RoutingError.new("Not Found")
#     end
#   end
